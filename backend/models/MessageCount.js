import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
});

export const MessageCount = mongoose.model("MessageCount", messageSchema);
