import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io("http://localhost:5000");

const IssueFeed = () => {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState("");
  const [image, setImage] = useState(null);
  const [filter, setFilter] = useState("");
  const [toastMessage, setToastMessage] = useState(""); // For toast messages

  const fetchIssues = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/issues", {
        params: filter ? { resolved: filter } : {},
      });
      setIssues(res.data);
    } catch (err) {
      console.error("Failed to fetch issues", err);
    }
  };

  useEffect(() => {
    fetchIssues();

    socket.on("issue-update", (issue) => {
      setIssues((prev) => {
        const updated = prev.filter((i) => i._id !== issue._id);
        return [issue, ...updated];
      });
    });

    return () => socket.off("issue-update");
  }, [filter]);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("title", newIssue);
    formData.append("description", "Example description"); // Update with real desc
    formData.append("location", "Neighborhood A"); // Dynamic later
    if (image) formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/issues/with-media", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      socket.emit("new-issue", res.data);
      setNewIssue("");
      setImage(null);
      setToastMessage("✅ Issue submitted successfully!");

      // Hide toast message after 3 seconds
      setTimeout(() => {
        setToastMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting issue:", error);
      setToastMessage("❌ Failed to submit the issue.");
      setTimeout(() => {
        setToastMessage("");
      }, 3000);
    }
  };

  const vote = async (id, type) => {
    const res = await axios.patch(`http://localhost:5000/api/issues/${id}/vote`, { type });
    socket.emit("issue-update", res.data);
  };

  const toggleResolved = async (id, currentStatus) => {
    const res = await axios.patch(`http://localhost:5000/api/issues/${id}`, {
      resolved: !currentStatus,
    });
    socket.emit("issue-update", res.data);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">📝 Report a New Issue</h2>

      {/* Toast Message */}
      {toastMessage && (
        <div className="mb-6 text-center">
          <div
            className={`inline-block px-4 py-2 rounded-lg shadow-sm border transition duration-300 ${
              toastMessage.startsWith("✅")
                ? "bg-green-100 text-green-800 border-green-300"
                : "bg-red-100 text-red-800 border-red-300"
            }`}
          >
            {toastMessage}
          </div>
        </div>
      )}

      {/* Issue Submission Form */}
      <div className="bg-white p-4 rounded-xl shadow-md space-y-3 mb-8">
        <input
          value={newIssue}
          onChange={(e) => setNewIssue(e.target.value)}
          placeholder="Enter issue title..."
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="file:border file:border-gray-300 file:rounded file:px-3 file:py-1 file:bg-gray-100"
        />
        <button
          onClick={handlePost}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
        >
          ➕ Submit Issue
        </button>
      </div>

      {/* Filter */}
      <div className="flex items-center mb-6">
        <label className="mr-3 font-semibold text-gray-700">Filter by status:</label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 focus:outline-none"
        >
          <option value="">All</option>
          <option value="false">Unresolved</option>
          <option value="true">Resolved</option>
        </select>
      </div>

      {/* Issue List */}
      <div className="space-y-6">
        {issues.map((issue) => (
          <div
            key={issue._id}
            className="bg-white p-6 rounded-xl shadow border border-gray-200"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-800">{issue.title}</h3>

              {issue.imageUrl && (
                <img
                  src={`http://localhost:5000${issue.imageUrl}`}
                  alt="issue"
                  className="w-full max-h-64 object-cover rounded-lg border"
                />
              )}

              <p className="text-gray-600">{issue.description}</p>
              <p className="text-sm text-gray-500">📍 {issue.location}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-4 text-sm">
                <button
                  onClick={() => vote(issue._id, "upvote")}
                  className="px-3 py-1 rounded bg-green-100 hover:bg-green-200 text-green-700 font-medium"
                >
                  ⬆️ Upvote ({issue.upvotes})
                </button>
                <button
                  onClick={() => vote(issue._id, "downvote")}
                  className="px-3 py-1 rounded bg-red-100 hover:bg-red-200 text-red-700 font-medium"
                >
                  ⬇️ Downvote ({issue.downvotes})
                </button>
              </div>

              <button
                onClick={() => toggleResolved(issue._id, issue.resolved)}
                className={`text-xs px-4 py-2 rounded font-semibold ${
                  issue.resolved
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {issue.resolved ? "✅ Resolved" : "❌ Unresolved"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssueFeed;
