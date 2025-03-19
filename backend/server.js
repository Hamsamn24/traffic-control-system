import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// ✅ Use Routes
app.use("/api/messages", messageRoutes);
// ✅ API to increment emergency message count
app.post("/increment-message", async (req, res) => {
  try {
    const countData = await MessageCount.findOne();
    countData.count += 1;
    await countData.save();
    res.json({ messageCount: countData.count });
  } catch (error) {
    console.error("Error incrementing count:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
