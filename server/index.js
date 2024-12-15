// server.js
import express, { json } from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

config();

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use("/api/auth", authRoutes);

// Connect to the database
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log("Error connecting to database:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
