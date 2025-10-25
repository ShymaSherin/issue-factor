import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import issueRoutes from "./routes/issueRoutes.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Test if .env is loaded properly
console.log("✅ Loaded MONGO_URI:", process.env.MONGODB_URI);

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.use("/api/issues", issueRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
