/** @format */

// src/validators/dealer.schema.ts
import { z } from "zod";

export const dealerSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  location: z.object({
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
  }),
  contact: z.object({
    phone: z.string().min(7),
    email: z.string().email(),
    website: z.string().url(),
  }),
  carsAvailable: z.array(z.string()).optional(), // Array of ObjectIds as strings
});

export type DealerInput = z.infer<typeof dealerSchema>;
