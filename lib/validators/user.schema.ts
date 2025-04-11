/** @format */

import { z } from "zod";

export const userSchema = z.object({
  _id: z.string().optional(),
  username: z.string().min(3),
  email: z.string().email(),
  passwordHash: z.string(),
  favorites: z.array(z.string()).optional(),
  isAdmin: z.boolean().default(false),
});

export type UserInput = z.infer<typeof userSchema>;
