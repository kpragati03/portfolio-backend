import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./server/routes/contact.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
// Middlewares - CORS configuration updated for multiple origins
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
=======
// This is the flexible CORS configuration that you need
const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-frontend-one-opal.vercel.app",
  /https:\/\/portfolio-frontend-git.*\.vercel\.app$/
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.some(o => o instanceof RegExp ? o.test(origin) : o === origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
>>>>>>> 90307a20a4bbba8299d4ca5d8275fe34c19f3ac0
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB || "portfolio",
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

app.get("/", (_req, res) => res.send("Server is running!"));
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
