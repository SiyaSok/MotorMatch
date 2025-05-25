/** @format */

import { z } from "zod";
import { CarSchema } from "./car.schema";

export const dealerSchema = z.object({
  _id: z.string().optional(),
  userId: z.string(), // ObjectId as string
  dealerLogo: z.string(),
  dealershipName: z.string(),
  address: z
    .object({
      street: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      zipcode: z.string().optional(), // Note: changed from 'zicode' in your model to 'zipcode' here
    })
    .optional(),
  location: z.string(),
  phone: z.string(),
  cars: z.array(CarSchema),
  // Array of Car ObjectIds as strings
  rating: z.number().min(0).max(5).optional(),
  established: z.number(),
  description: z.string(),
  website: z.string().url(),
  socialLinks: z
    .object({
      facebook: z.string().optional(),
      twitter: z.string().optional(),
      instagram: z.string().optional(),
      linkedin: z.string().optional(),
    })
    .optional(),
  isVerified: z.boolean().optional(),
  isFeatured: z.boolean().optional(),
  isActive: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  createdAt: z.string().optional(), // For timestamps
  updatedAt: z.string().optional(), // For timestamps
});

export type DealerInput = z.infer<typeof dealerSchema>;
