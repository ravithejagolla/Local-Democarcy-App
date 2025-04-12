import jwt from "jsonwebtoken";
import env from 'dotenv'
env.config()
import User from "../models/user.schema.js";

// Replace this with your secret key
const JWT_SECRET = process.env.JWT_SECRET

export const verifyAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    req.user = user; 
    next(); 
  } catch (error) {
    return res.status(400).json({ message: "Invalid token", error: error.message });
  }
};

// Middleware to verify the role of the user
export const verifyRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied. Insufficient privileges." });
    }
    next();
  };
};
