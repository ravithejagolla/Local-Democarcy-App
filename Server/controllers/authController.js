import argon2 from "argon2";
import env from 'dotenv';
env.config();
import jwt from "jsonwebtoken";
import User from "../models/user.schema.js";

const JWT_SECRET = process.env.JWT_SECRET;

// ──────── Signup ────────
export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await argon2.hash(password);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "citizen",
    });

    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ──────── Login ────────
export const login=async(req,res)=>{
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const validPassword = await argon2.verify(user.password, password);
    if (!validPassword) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({ token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

export const getCurrentUser = async (req, res) => {
  try {
    const user = await authService.getCurrentUser(req.cookies.token);
    res.json({ user });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
// ──────── Logout ────────
export const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
};
