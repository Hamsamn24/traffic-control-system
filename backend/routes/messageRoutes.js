import express from "express";
import { MessageCount } from "../models/MessageCount.js";

const router = express.Router();

// Initialize message count if not exists
const initializeMessageCount = async () => {
  const countExists = await MessageCount.findOne();
  if (!countExists) {
    await MessageCount.create({ count: 0 });
  }
};
initializeMessageCount();

// API to increment message count
router.post("/increment", async (req, res) => {
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

// API to get message count
router.get("/count", async (req, res) => {
  try {
    const countData = await MessageCount.findOne();
    res.json({ messageCount: countData.count });
  } catch (error) {
    console.error("Error fetching count:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
