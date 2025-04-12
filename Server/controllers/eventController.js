import Event from "../models/events.schema.js";

// Controller to fetch all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ message: "Error fetching events", error: err.message });
  }
};

// Controller to create a new event (admin only)
export const createEvent = async (req, res) => {
  const { name, date, location } = req.body;

  // Basic validation
  if (!name || !date || !location) {
    return res.status(400).json({ message: "Please provide all required fields." });
  }

  try {
    const newEvent = new Event({
      name,
      date,
      location,
      createdBy: req.user._id, // Associate event with the creator
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    console.error("Error creating event:", err);
    res.status(500).json({ message: "Error creating event", error: err.message });
  }
};
