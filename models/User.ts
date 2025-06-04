/** @format */

import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["buyer", "dealer", "admin"],
      default: "buyer",
    },
    dealer: {
      type: Schema.Types.ObjectId,
      ref: "Dealer",
    },
    favorites: {
      type: [Schema.Types.ObjectId],
      ref: "Car",
      default: [],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
