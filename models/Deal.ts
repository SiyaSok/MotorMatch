/** @format */

import { Schema, model, models } from "mongoose";

const DealSchema = new Schema(
  {
    carId: { type: Schema.Types.ObjectId, ref: "Car", required: true },
    dealerId: { type: Schema.Types.ObjectId, ref: "Dealer", required: true },
    price: { type: Number, required: true },
    discount: { type: Number, min: 0, max: 100 },
    description: { type: String },
    validUntil: { type: Date, required: true },
  },
  { timestamps: true }
);

const Deal = models.Deal || model("Deal", DealSchema);
export default Deal;
