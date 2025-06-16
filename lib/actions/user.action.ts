/** @format */

"use server";

import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hashSync } from "bcrypt-ts-edge";
import { FormatError } from "../utils";
import { signInFormSchema, signUpFormSchema } from "../validators/user.schema";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: FormatError(error) };
  }
}

export async function signOutUser() {
  await signOut();
  revalidatePath("/", "layout");
}

export async function signUpUser(prevState: unknown, formData: FormData) {
  try {
    console.log("Form Data:", formData);

    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    console.log("Parsed User:", user);

    const plainPassword = user.password;

    user.password = hashSync(user.password, 10);

    console.log("Hashed Password:", user.password);

    // Create new user
    const newUser = new User({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    // Save user to database
    await newUser.save();

    console.log("User created successfully");

    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: "User signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: FormatError(error) };
  }
}
