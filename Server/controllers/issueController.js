import { Issue } from "../models/isuue.schema.js";

// Create issue (with media)
export const createIssueWithMedia = async (req, res) => {
  const { title, description, location } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

  const newIssue = new Issue({ title, description, location, imageUrl });
  const saved = await newIssue.save();
  res.status(201).json(saved);
};

// Get all issues (with resolved filter)
export const getIssues = async (req, res) => {
  const { resolved } = req.query;
  const filter = resolved ? { resolved: resolved === 'true' } : {};
  const issues = await Issue.find(filter).sort({ createdAt: -1 });
  res.json(issues);
};

// Upvote/Downvote
export const voteIssue = async (req, res) => {
  const { type } = req.body;
  const update = type === 'upvote' ? { $inc: { upvotes: 1 } } : { $inc: { downvotes: 1 } };

  const updated = await Issue.findByIdAndUpdate(req.params.id, update, { new: true });
  res.json(updated);
};

// Toggle resolved status
export const updateIssue = async (req, res) => {
  const updated = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};
