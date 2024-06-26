import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    chatId: { type: String },
    senderId: { type: String },
    receiverName: { type: String },
    text: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("message", MessageSchema)