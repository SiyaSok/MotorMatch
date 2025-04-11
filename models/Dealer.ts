/** @format */

import { Schema, model, models } from "mongoose";

const DealerSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    dealershipName: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    cars: [{ type: Schema.Types.ObjectId, ref: "Car" }],
    rating: { type: Number, min: 0, max: 5 },
  },
  { timestamps: true }
);

const Dealer = models.Dealer || model("Dealer", DealerSchema);
export default Dealer;
