/** @format */

"use server";

import connectDB from "@/config/db";
import Car from "@/models/Car";
import { convertToPlainObject } from "../utils";
import { CarTypeS } from "@/types";
import "@/models/Dealer"; //
export async function getCars(): Promise<CarTypeS[]> {
  await connectDB();
  const cars = await Car.find({}).limit(8).lean();
  return convertToPlainObject(cars) as unknown as CarTypeS[];
}

export const getSingleCars = async (id: string): Promise<CarTypeS> => {
  await connectDB();
  const data = await Car.findById(id).populate("dealer").exec();
  return convertToPlainObject(data) as unknown as CarTypeS;
};
