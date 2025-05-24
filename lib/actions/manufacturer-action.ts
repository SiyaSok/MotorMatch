/** @format */

"use server";

import connectDB from "@/config/db";
import { convertToPlainObject } from "../utils";
import Manufacturer from "@/models/Manufacturer";
import "@/models/Car"; //
import { manufacturer } from "@/types";

export async function getManufacturers() {
  await connectDB();

  const manufacturersWithCars = await Manufacturer.find().populate("cars");

  return convertToPlainObject(manufacturersWithCars);
}

export const getSingleManufacturer = async (
  id: string
): Promise<manufacturer> => {
  await connectDB();

  const data = await Manufacturer.findById(id).populate("cars").exec();

  return convertToPlainObject(data) as unknown as manufacturer;
};
