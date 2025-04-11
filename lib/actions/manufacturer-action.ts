/** @format */

"use server";

import connectDB from "@/config/db";
import Car from "@/models/Car";
import { convertToPlainObject } from "../utils";

export async function getCars() {
  await connectDB();

  const cars = await Car.find({}).limit(4).lean();
  return convertToPlainObject(cars);
}
