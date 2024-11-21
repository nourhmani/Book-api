import User from "../models/User.js";
import bcrypt from "bcrypt";
import e from "express";
import jwt from "jsonwebtoken";
import { model } from "mongoose";

export const JWT_SECRET = "ISAMM_SECRET";

export const login = async (req, res) => {
 
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //else return token
    res.status(200).json({
      token: jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "24h" }),
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  try {
    const hashedPasswordPWD = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      
      ...req.body,
      password: hashedPasswordPWD,
    });

    await user.save();
    const { password, ...newUser } = user.toObject();
    res.status(201).json({ model: newUser, message: "success : user created" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
