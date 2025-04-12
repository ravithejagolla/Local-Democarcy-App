// pages/Legislation.jsx
import React from "react";
import Navbar from "../components/Navbar";

const Legislation = () => {
  const bills = [
    {
      title: "Plastic Ban Act",
      summary: "A proposal to reduce single-use plastics in local businesses.",
      status: "Under Review"
    },
    {
      title: "Affordable Housing Expansion",
      summary: "Plan to add 200 low-income housing units in the downtown area.",
      status: "Open for Public Comment"
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Local Legislation</h2>
        {bills.map((bill, i) => (
          <div key={i} className="bg-white p-4 mb-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">{bill.title}</h3>
            <p className="text-gray-600 mb-1">{bill.summary}</p>
            <span className="text-sm text-gray-500">Status: {bill.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legislation;
