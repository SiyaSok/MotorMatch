/** @format */

import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema(
  {
    senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    receiverId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    carId: { type: Schema.Types.ObjectId, ref: "Car" },
  },
  { timestamps: true }
);

const Message = models.Message || model("Message", MessageSchema);
export default Message;
