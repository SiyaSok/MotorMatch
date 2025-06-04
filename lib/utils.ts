/** @format */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export async function FormatError(error: unknown) {
  if (
    typeof error === "object" &&
    error !== null &&
    "name" in error &&
    (error as { name: string }).name === "ZodError"
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fieldErrors =
      (error as { errors?: { message: string }[] }).errors?.map(
        (err: { message: string }) => err.message
      ) || [];
    return fieldErrors.join(". ");
  } else if (
    typeof error === "object" &&
    error !== null &&
    "name" in error &&
    (error as { name: string }).name === "PrismaClientKnownRequestError" &&
    "code" in error &&
    (error as { code: string }).code === "P2002"
  ) {
    const field = (error as unknown as { meta?: { target?: string[] } }).meta
      ?.target
      ? (error as unknown as { meta: { target: string[] } }).meta.target[0]
      : "Field";
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  } else if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message?: unknown }).message === "string"
  ) {
    return (error as { message: string }).message;
  } else {
    return JSON.stringify(error);
  }
}
