// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./server/routes/contact.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration - Allow multiple origins
app.use(cors({ 
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://portfolio-frontend-git-main-pragati-kumaris-projects-1dcb6d08.vercel.app",
    process.env.FRONTEND_URL
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB || "portfolio",
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// Routes
app.get("/", (_req, res) => {
  res.send("Server is running!");
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/contact", contactRoutes);

// Error Handler
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, error: "Server error" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));