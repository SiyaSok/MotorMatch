/** @format */

// src/validators/manufacturer.schema.ts
import { z } from "zod";

export const manufacturerSchema = z.object({
  _id: z.string().optional(), // Optional when creating, required when updating
  name: z.string().min(1),
  logoUrl: z.string().url().optional(),
  country: z.string(),
  website: z.string().url(),
});

export type ManufacturerInput = z.infer<typeof manufacturerSchema>;
