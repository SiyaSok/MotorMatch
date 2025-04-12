/** @format */

import { z } from "zod";
import { Types } from "mongoose";

export const CarSchema = z.object({
  _id: z.string(),
  name: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  mileage: z.number(),
  Seats: z.number().optional(),

  bodyType: z.enum([
    "Single Cab",
    "Crossover",
    "Double Cab",
    "SUV",
    "Hatchback",
    "Sedan",
  ]),

  fuelType: z.enum(["petrol", "diesel", "electric", "hybrid"]),

  transmission: z.enum(["manual", "automatic", "cvt"]),

  price: z.number(),

  imageUrls: z.array(z.string()).optional(),

  features: z
    .object({
      electricWindows: z.string().optional(),
      powerSteering: z.boolean().optional(),
      centralLocking: z.string().optional(),
      airConditioning: z.boolean().optional(),
      bluetoothConnectivity: z.boolean().optional(),
      usbPort: z.boolean().optional(),
      auxiliaryInput: z.boolean().optional(),
      dayTimeDrivingRunningLights: z.boolean().optional(),
      frontFogLights: z.boolean().optional(),
      rearFogLights: z.boolean().optional(),
      HighLevelBrakeLight: z.boolean().optional(),
      onBoardTripComputer: z.boolean().optional(),
      multiFunctionSteeringWheelControls: z.boolean().optional(),
      alloyWheel: z.boolean().optional(),
      frontTyres: z.string().optional(),
      rearTyres: z.string().optional(),
    })
    .optional(),

  specifications: z
    .object({
      length: z.number().optional(),
      height: z.number().optional(),
      wheelBase: z.number().optional(),
      groundClearance: z.number().optional(),
      loadVolumeCapacity: z.number().optional(),
    })
    .optional(),

  engine: z
    .object({
      powerMax: z.number().optional(),
      powerMaxrpm: z.number().optional(),
      torqueMax: z.number().optional(),
      torqueMaxrpm: z.number().optional(),
      engineSize: z.number().optional(),
      cylinders: z.number().optional(),
      fuelType: z.string().optional(),
      enginePosition: z.string().optional(),
      transmissionType: z.string().optional(),
      gearRatiosQuantity: z.number().optional(),
      gearShift: z.string().optional(),
      drivenWheels: z.string().optional(),
    })
    .optional(),

  performance: z
    .object({
      Kph: z.number().optional(),
      topSpeed: z.number().optional(),
    })
    .optional(),

  economy: z
    .object({
      average: z.number().optional(),
      co2: z.number().optional(),
      fualRange: z.number().optional(),
      fualTankCapacity: z.number().optional(),
    })
    .optional(),

  safety: z
    .object({
      abs: z.boolean().optional(),
      ebd: z.boolean().optional(),
      tractionControl: z.boolean().optional(),
      stabilityControl: z.boolean().optional(),
      driverAirbag: z.boolean().optional(),
      passengerAirbag: z.boolean().optional(),
      airbagQuantity: z.number().optional(),
    })
    .optional(),

  available: z.boolean().default(true),
  isNew: z.boolean().default(false),
  isCommercial: z.boolean().default(false),

  dealer: z.object({
    _id: z.string(),
    userId: z.union([z.string(), z.instanceof(Types.ObjectId)]),
    dealershipName: z.string(),
    location: z.string(),
    cars: z.array(z.string()).optional(),
  }),
  manufacturer: z.union([z.string(), z.instanceof(Types.ObjectId)]),
});

export type CarType = z.infer<typeof CarSchema>;
