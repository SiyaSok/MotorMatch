/** @format */

import { Schema, model, models } from "mongoose";

const DealerSchema = new Schema(
  {
    dealerLogo: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    dealershipName: { type: String, required: true },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zicode: { type: String },
    },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    cars: [{ type: Schema.Types.ObjectId, ref: "Car" }],
    rating: { type: Number, min: 0, max: 5 },
    established: { type: Number, required: true },
    description: { type: String, required: true },
    website: { type: String, required: true },
    socialLinks: {
      facebook: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      linkedin: { type: String },
    },
    isVerified: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Dealer = models.Dealer || model("Dealer", DealerSchema);
export default Dealer;
