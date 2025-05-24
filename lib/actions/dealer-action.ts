/** @format */

"use server";

import connectDB from "@/config/db";
import { convertToPlainObject } from "../utils";
import "@/models/Car"; //
import { dealer } from "@/types";
import Dealer from "@/models/Dealer";

export async function getDealers() {
  await connectDB();

  const dealersWithCars = await Dealer.find().populate("cars");

  return convertToPlainObject(dealersWithCars);
}

export const getSingleDealer = async (id: string): Promise<dealer> => {
  await connectDB();

  const data = await Dealer.findById(id).populate("cars").exec();

  return convertToPlainObject(data) as unknown as dealer;
};
