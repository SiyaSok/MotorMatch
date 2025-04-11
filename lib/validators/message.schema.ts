/** @format */

import { z } from "zod";

export const messageSchema = z.object({
  _id: z.string().optional(),
  senderId: z.string(),
  receiverId: z.string(),
  message: z.string(),
  carId: z.string().optional(),
  createdAt: z.date().optional(),
});
