// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.routes.js"; // <-- FIX: Corrected import path

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
// <-- FIX: CORS now uses an environment variable for the deployed frontend URL
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));

// <-- CRITICAL FIX: These must come BEFORE your routes to parse the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB connect
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB || "portfolio",
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// Simple root route to show the server is up
app.get("/", (_req, res) => {
  res.send("Server is running!");
});

// Health check route
app.get("/health", (_req, res) => res.json({ ok: true }));

// API Routes
app.use("/api/contact", contactRoutes);

// <-- FIX: Removed the empty app.post("/contact", ...) route

// Custom error handler
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, error: "Server error" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));