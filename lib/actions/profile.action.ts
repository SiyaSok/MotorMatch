/** @format */

"use server";

import { auth } from "@/auth";
import UserModel from "@/models/User";
import { User } from "@/types";
import { convertToPlainObject } from "../utils";
import connectDB from "@/config/db";

export async function getUserProfile(): Promise<User | { error: string }> {
  await connectDB();
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return { error: "User ID is required" };
  }

  const user = await UserModel.findById(session.user.id).lean();

  return convertToPlainObject(user) as unknown as User;
}
