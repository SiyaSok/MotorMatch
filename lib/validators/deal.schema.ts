/** @format */

import { z } from "zod";

export const dealSchema = z.object({
  _id: z.string().optional(),
  carId: z.string(),
  dealerId: z.string(),
  price: z.number(),
  discount: z.number().min(0).max(100).optional(),
  description: z.string().optional(),
  validUntil: z.date(),
  createdAt: z.date().optional(),
});
