/** @format */

"use server";

import { auth } from "@/auth";
import connectDB from "@/config/db";
import User from "@/models/User";
import "@/models/Car"; //

import { revalidatePath } from "next/cache";
import { convertToPlainObject } from "../utils";
import { CarTypeS } from "@/types";

interface AddToWishListResult {
  message?: string;
  isBookmarked?: boolean;
  error?: string;
}
interface CheckBookmarkStatusResult {
  isBookmarked?: boolean;
  error?: string;
}

interface UserDocument {
  favorites?: string[];
  [key: string]: unknown;
}

export async function AddToWishList(
  carID: string
): Promise<AddToWishListResult> {
  await connectDB();

  const session = await auth();

  if (!session) {
    return { error: "You must be logged in to add to wish List" };
  }

  if (!session.user || !session.user.id) {
    return { error: "User ID is required" };
  }

  const userId = session.user.id;

  // Find user in database
  const user = await User.findById(userId);

  // Check if property is bookmarked
  let isBookmarked: boolean = user?.favorites?.includes(carID) || false;

  let message: string | undefined;

  if (isBookmarked) {
    // If already bookmarked, remove it
    user?.favorites?.pull(carID);
    message = "Car removed successfully";
    isBookmarked = false;
  } else {
    // If not bookmarked, add it
    user?.favorites?.push(carID);
    message = "car added successfully";
    isBookmarked = true;
  }
  console.log("user:", user);

  await user.save();
  revalidatePath("/", "layout");

  return { message, isBookmarked };
}

export async function checkBookmarkStatus(
  carID: string
): Promise<CheckBookmarkStatusResult> {
  await connectDB();

  const session = await auth();
  if (!session) {
    return { error: "You must be logged in to check bookmark status" };
  }

  if (!session.user || !session.user.id) {
    return { error: "User ID is required" };
  }

  // Find user in database
  const user: UserDocument | null = await User.findById(session.user.id);

  if (!user) {
    return { error: "User not found" };
  }

  // Check if property is bookmarked
  const isBookmarked: boolean = user?.favorites?.includes(carID) || false;

  return { isBookmarked };
}

export async function getUserFavorites(): Promise<CarTypeS[]> {
  await connectDB();

  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return [];
  }
  // Find user in database
  const user = await User.findById(session.user.id).populate("favorites");

  if (!user) {
    return [];
  }
  // Return user's favorite cars as plain objects
  return convertToPlainObject(user.favorites ?? []);
}
