/** @format */

import { Types } from "mongoose";
import { z } from "zod";

export const userSchema = z.object({
  _id: z.string().optional(),
  name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
  role: z.string(),
  password: z.string(),
  image: z.string().optional(),
  favorites: z.array(z.string()).optional(),
  isAdmin: z.boolean().default(false),
  isVerified: z.boolean().default(false),
  isActive: z.boolean().default(true),
  dealer: z.union([z.string(), z.instanceof(Types.ObjectId)]),
});

export type UserInput = z.infer<typeof userSchema>;

// Schema for signing users in
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Schema for signing up a user
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
