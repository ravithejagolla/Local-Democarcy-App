// pages/Feedback.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Feedback = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setMessage("");
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Send Feedback to Your Representative</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Share your thoughts or concerns..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button
          onClick={handleSubmit}
          className="mt-3 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          Submit
        </button>
        {submitted && <p className="text-green-600 mt-3">Feedback submitted successfully!</p>}
      </div>
    </div>
  );
};

export default Feedback;
