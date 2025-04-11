/** @format */

import { Schema, model, models } from "mongoose";

const CarSchema = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    mileage: { type: Number, required: true },
    Seats: { type: Number },
    bodyType: {
      type: String,
      enum: [
        "Single Cab",
        "Crossover",
        "Double Cab",
        "SUV",
        "Hatchback",
        "Sedan",
        "Single Cab",
      ],
      required: true,
    },
    fuelType: {
      type: String,
      enum: ["petrol", "diesel", "electric", "hybrid"],
      required: true,
    },
    transmission: {
      type: String,
      enum: ["manual", "automatic", "cvt"],
      required: true,
    },
    price: { type: Number, required: true },
    imageUrls: [{ type: String }],
    features: {
      electricWindows: String,
      powerSteering: Boolean,
      centralLocking: String,
      airConditioning: Boolean,
      bluetoothConnectivity: Boolean,
      usbPort: Boolean,
      auxiliaryInput: Boolean,
      dayTimeDrivingRunningLights: Boolean,
      frontFogLights: Boolean,
      rearFogLights: Boolean,
      HighLevelBrakeLight: Boolean,
      onBoardTripComputer: Boolean,
      multiFunctionSteeringWheelControls: Boolean,
      alloyWheel: Boolean,
      frontTyres: String,
      rearTyres: String,
    },
    specifications: {
      length: Number,
      height: Number,
      wheelBase: Number,
      groundClearance: Number,
      loadVolumeCapacity: Number,
    },
    engine: {
      powerMax: Number,
      powerMaxrpm: Number,
      torqueMax: Number,
      torqueMaxrpm: Number,
      engineSize: Number,
      cylinders: Number,
      fuelType: String,
      enginePosition: String,
      transmissionType: String,
      gearRatiosQuantity: Number,
      gearShift: String,
      drivenWheels: String,
    },
    performance: {
      Kph: Number,
      topSpeed: Number,
    },
    economy: {
      average: Number,
      co2: Number,
      fualRange: Number,
      fualTankCapacity: Number,
    },
    safety: {
      abs: Boolean,
      ebd: Boolean,
      tractionControl: Boolean,
      stabilityControl: Boolean,
      driverAirbag: Boolean,
      passengerAirbag: Boolean,
      airbagQuantity: Number,
    },
    available: { type: Boolean, default: true, required: true },
    isNewCar: { type: Boolean, default: false, required: true },
    isCommercial: { type: Boolean, default: false, required: true },
    dealer: {
      type: Schema.Types.ObjectId,
      ref: "Dealer",
      required: true,
    },
    manufacturer: {
      type: Schema.Types.ObjectId,
      ref: "Manufacturer",
      required: true,
    },
  },
  { timestamps: true }
);

const Car = models.Car || model("Car", CarSchema);
export default Car;
