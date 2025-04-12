import { Lagislation } from "../models/lagislation.schema.js";


export const createLegislation = async (req, res) => {
  const { title, fullText, plainSummary, author } = req.body;
  const newItem = new Lagislation({ title, fullText, plainSummary, author });
  try {
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const getAllLegislation = async (req, res) => {
    try {
      const items = await Lagislation.find().sort({ dateProposed: -1 });
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  