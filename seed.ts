/** @format */
"use server";

import { faker } from "@faker-js/faker";
import User from "./models/User";
import Car from "./models/Car";
import Manufacturer from "./models/Manufacturer";
import Dealer from "./models/Dealer";
import Deal from "./models/Deal";
import mongoose from "mongoose";

async function seed() {
  try {
    let connected = false;

    const connectDB = async (): Promise<void> => {
      mongoose.set("strictQuery", true);

      if (connected) {
        console.log("Connected to Mongoose");
        return;
      }

      try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
          throw new Error(
            "MONGODB_URI is not defined in environment variables"
          );
        }
        await mongoose.connect(mongoUri);
        connected = true;
        console.log("Connected to MongoDB");
      } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
      }
    };

    await connectDB();
    // Clear existing data
    await Promise.all([
      User.deleteMany({}),
      Car.deleteMany({}),
      Manufacturer.deleteMany({}),
      Dealer.deleteMany({}),
      Deal.deleteMany({}),
    ]);

    // Create Manufacturers
    const manufacturerNames = ["Toyota", "BMW", "Ford", "Tesla", "Mercedes"];
    const manufacturerDocs = await Manufacturer.insertMany(
      manufacturerNames.map((name) => ({
        name,
        country: faker.location.country(),
        logoUrl: faker.image.urlPicsumPhotos(),
        description: faker.lorem.sentence(),
      }))
    );

    // Create Buyers
    const buyerDocs = await User.insertMany(
      Array.from({ length: 10 }).map(() => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: "buyer",
      }))
    );

    // Create Dealers (Users + Dealer profile)
    const dealerUsers = await User.insertMany(
      Array.from({ length: 5 }).map(() => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: "dealer",
      }))
    );

    const dealerDocs = await Dealer.insertMany(
      dealerUsers.map((user) => ({
        userId: user._id,
        dealershipName: faker.company.name(),
        location: faker.location.city(),
        phone: faker.phone.number(),
        rating: faker.number.float({ min: 3, max: 5 }),
      }))
    );

    // Create Cars
    const carDocs = await Car.insertMany(
      Array.from({ length: 20 }).map(() => {
        const brand = faker.helpers.arrayElement(manufacturerDocs);
        return {
          name: faker.vehicle.vehicle(),
          brand: brand.name,
          model: faker.vehicle.model(),
          year: faker.date.past({ years: 10 }).getFullYear(),
          fuelType: faker.helpers.arrayElement([
            "petrol",
            "diesel",
            "electric",
            "hybrid",
          ]),
          transmission: faker.helpers.arrayElement(["manual", "automatic"]),
          price: faker.number.int({ min: 10000, max: 100000 }),
          imageUrls: [
            faker.image.urlPicsumPhotos(),
            faker.image.urlPicsumPhotos(),
          ],
          features: [
            faker.vehicle.vin(),
            faker.vehicle.manufacturer(),
            faker.vehicle.fuel(),
          ],
          specs: {
            horsepower: faker.number.int({ min: 100, max: 500 }),
            torque: faker.number.int({ min: 100, max: 600 }),
            topSpeed: faker.number.int({ min: 120, max: 200 }),
            zeroToSixty: faker.number.float({ min: 3, max: 10 }),
          },
          available: true,
        };
      })
    );

    // Create Deals
    await Deal.insertMany(
      Array.from({ length: 10 }).map(() => ({
        carId: faker.helpers.arrayElement(carDocs)._id,
        dealerId: faker.helpers.arrayElement(dealerDocs)._id,
        price: faker.number.int({ min: 15000, max: 75000 }),
        discount: faker.number.int({ min: 5, max: 25 }),
        description: faker.commerce.productDescription(),
        validUntil: faker.date.future(),
      }))
    );

    console.log("🌱 Seed complete!");
    await new Promise((res) => setTimeout(res, 100)); // ensure logs flush
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  }
}

seed();
