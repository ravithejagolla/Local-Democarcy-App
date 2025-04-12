import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Organize = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", date: "", location: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Get role from localStorage
    const role = localStorage.getItem("role");
    setUserRole(role);

    // Fetch events
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost/event/get-event");
        setEvents(response.data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Could not load events.");
      }
    };

    fetchEvents();
  }, []);

  const handleChange = (e) =>
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, date, location } = newEvent;

    if (!name || !date || !location) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost/event/create-event", newEvent, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setSuccess("Event created successfully!");
      setError("");
      setNewEvent({ name: "", date: "", location: "" });
      setEvents([...events, response.data]);
    } catch (err) {
      setError("Error creating event. Please try again.");
      setSuccess("");
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Organize in Your Neighborhood</h2>

        {userRole === "admin" && (
          <>
            {success && <p className="text-green-500 mb-4">{success}</p>}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Event Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newEvent.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700">
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                  Event Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={newEvent.location}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Create Event
              </button>
            </form>
          </>
        )}

        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Upcoming Initiatives</h3>
        <ul className="space-y-4">
          {events.map((event, i) => (
            <li key={i} className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">{event.date} at {event.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Organize;
