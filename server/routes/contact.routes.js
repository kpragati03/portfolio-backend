import { Router } from "express";
import Contact from "../models/contact.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    console.log("Received body:", req.body);

    const { name, email, phone, subject, message } = req.body;

    // Trim and validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required.",
      });
    }

    // <-- THE FIX IS HERE: Use "Contact" (uppercase C) to match your import
    const doc = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      subject: subject?.trim() || "",
      message: message.trim(),
    });

    return res.status(201).json({ success: true, data: doc });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

export default router;
