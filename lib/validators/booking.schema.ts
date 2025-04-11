/** @format */
import { z } from "zod";

export const bookingSchema = z.object({
  _id: z.string().optional(),
  userId: z.string(),
  carId: z.string(),
  testDriveDate: z.date(),
  status: z.enum(["pending", "confirmed", "cancelled"]).default("pending"),
  createdAt: z.date().optional(),
});
