/** @format */
import { z } from "zod";

export const reviewSchema = z.object({
  _id: z.string().optional(),
  carId: z.string(),
  userId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  createdAt: z.date().optional(),
});
