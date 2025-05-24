/** @format */

// src/validators/manufacturer.schema.ts
import { z } from "zod";
import { CarSchema } from "./car.schema";

export const manufacturerSchema = z.object({
  _id: z.string().optional(), // Optional when creating, required when updating
  name: z.string().min(1),
  description: z.string(),
  logoUrl: z.string().url().optional(),
  country: z.string(),
  website: z.string().url(),
  cars: z.array(CarSchema),
});

export type ManufacturerInput = z.infer<typeof manufacturerSchema>;
