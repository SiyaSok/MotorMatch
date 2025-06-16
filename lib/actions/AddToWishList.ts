/** @format */

"use server";

import { auth } from "@/auth";
import connectDB from "@/config/db";
import User from "@/models/User";
import { revalidatePath } from "next/cache";

// interface SessionUser {
//   userId: string;
//   [key: string]: any;
// }

interface AddToWishListResult {
  message?: string;
  isBookmarked?: boolean;
  error?: string;
}

async function AddToWishList(carID: string): Promise<AddToWishListResult> {
  await connectDB();

  const session = await auth();

  console.log("Session:", session);

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
  let isBookmarked: boolean = user?.bookmarks?.includes(carID) || false;

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

  await user.save();
  revalidatePath("/cars", "page");

  return { message, isBookmarked };
}

export default AddToWishList;
