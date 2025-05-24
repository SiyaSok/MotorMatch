/** @format */

import { Schema, model, models } from "mongoose";

const ManufacturerSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String },
    logoUrl: { type: String },
    description: { type: String },
    cars: [
      {
        type: Schema.Types.ObjectId,
        ref: "Car",
      },
    ], // New field for bidirectional relationship
  },
  { timestamps: true }
);

const Manufacturer =
  models.Manufacturer || model("Manufacturer", ManufacturerSchema);
export default Manufacturer;
