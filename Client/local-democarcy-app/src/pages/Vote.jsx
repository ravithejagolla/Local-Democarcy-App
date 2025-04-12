// pages/Vote.jsx
import React from "react";
import Navbar from "../components/Navbar";

const Vote = () => {
  const issues = [
    { question: "Should the city install more bike lanes?", options: ["Yes", "No"] },
    { question: "Support expansion of community gardens?", options: ["Yes", "No"] },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Community Voting</h2>
        {issues.map((issue, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="text-lg font-semibold">{issue.question}</h3>
            <div className="mt-2 space-x-4">
              {issue.options.map((opt, i) => (
                <button
                  key={i}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vote;
