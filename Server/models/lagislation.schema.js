import { Schema,model } from "mongoose";

const legislationSchema = new Schema({
  title: { type: String, required: true },
  fullText: { type: String, required: true },
  plainSummary: { type: String, required: true },
  author: { type: String, default: 'Anonymous' },
  dateProposed: { type: Date, default: Date.now }
});

export const Lagislation =model('Legislation', legislationSchema);
