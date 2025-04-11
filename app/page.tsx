/** @format */

// import connectDB from "@/config/db";
// import Car from "@/models/Car";
// import Deal from "@/models/Deal";
// import Dealer from "@/models/Dealer";
// import Manufacturer from "@/models/Manufacturer";
// import User from "@/models/User";
// import { faker } from "@faker-js/faker";
import Image from "next/image";

export default async function Home() {
  // async function seed() {
  //   try {
  //     await connectDB();

  //     await Promise.all([
  //       User.deleteMany({}),
  //       Car.deleteMany({}),
  //       Manufacturer.deleteMany({}),
  //       Dealer.deleteMany({}),
  //       Deal.deleteMany({}),
  //     ]);

  //     const manufacturerNames = ["Toyota", "BMW", "Ford", "Tesla", "Mercedes"];
  //     const manufacturerDocs = await Manufacturer.insertMany(
  //       manufacturerNames.map((name) => ({
  //         name,
  //         country: faker.location.country(),
  //         logoUrl: faker.image.urlPicsumPhotos(),
  //         description: faker.lorem.sentence(),
  //       }))
  //     );

  //     const buyerDocs = await User.insertMany(
  //       Array.from({ length: 10 }).map(() => ({
  //         name: faker.person.fullName(),
  //         email: faker.internet.email(),
  //         password: faker.internet.password(),
  //         role: "buyer",
  //       }))
  //     );

  //     const dealerUsers = await User.insertMany(
  //       Array.from({ length: 5 }).map(() => ({
  //         name: faker.person.fullName(),
  //         email: faker.internet.email(),
  //         password: faker.internet.password(),
  //         role: "dealer",
  //       }))
  //     );

  //     const dealerDocs = await Dealer.insertMany(
  //       dealerUsers.map((user) => ({
  //         userId: user._id,
  //         dealershipName: faker.company.name(),
  //         location: faker.location.city(),
  //         phone: faker.phone.number(),
  //         rating: faker.number.float({ min: 3, max: 5 }),
  //       }))
  //     );
  //     const carDocs = await Car.insertMany(
  //       Array.from({ length: 20 }).map(() => {
  //         const manufacturer = faker.helpers.arrayElement(manufacturerDocs);
  //         const dealer = faker.helpers.arrayElement(dealerDocs);
  //         const fuel = faker.helpers.arrayElement([
  //           "petrol",
  //           "diesel",
  //           "electric",
  //           "hybrid",
  //         ]);
  //         const bodyType = faker.helpers.arrayElement([
  //           "Single Cab",
  //           "Crossover",
  //           "Double Cab",
  //           "SUV",
  //           "Hatchback",
  //           "Sedan",
  //         ]);

  //         return {
  //           name: faker.vehicle.vehicle(),
  //           brand: manufacturer.name,
  //           model: faker.vehicle.model(),
  //           year: faker.date.past({ years: 10 }).getFullYear(),
  //           mileage: faker.number.int({ min: 0, max: 200000 }),
  //           Seats: faker.number.int({ min: 2, max: 8 }),
  //           bodyType,
  //           fuelType: fuel,
  //           transmission: faker.helpers.arrayElement([
  //             "manual",
  //             "automatic",
  //             "cvt",
  //           ]),
  //           price: faker.number.int({ min: 10000, max: 150000 }),
  //           imageUrls: [
  //             "https://assets.volkswagen.com/is/image/volkswagenag/Golf-Digital-Skins_HPB2?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTgwMCZoZWk9ODAwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjU1MGM=",
  //             "https://assets.volkswagen.com/is/image/volkswagenag/VW-Polo-Vivo_245?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmNzgwOQ==",
  //             "https://assets.volkswagen.com/is/image/volkswagenag/Golf-Digital-Skins_HPB2?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTgwMCZoZWk9ODAwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJjU1MGM=",
  //             "https://assets.volkswagen.com/is/image/volkswagenag/amarok-range?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTEwNTImaGVpPTEwNTImYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmZTk1ZQ==",

  //             "https://assets.volkswagen.com/is/image/volkswagenag/VW-Golf-HPB?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTE5MjAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmNzgwOQ==",
  //           ],
  //           features: {
  //             electricWindows: "front and rear",
  //             powerSteering: true,
  //             centralLocking: "remote",
  //             airConditioning: true,
  //             bluetoothConnectivity: true,
  //             usbPort: true,
  //             auxiliaryInput: true,
  //             dayTimeDrivingRunningLights: faker.datatype.boolean(),
  //             frontFogLights: faker.datatype.boolean(),
  //             rearFogLights: faker.datatype.boolean(),
  //             HighLevelBrakeLight: faker.datatype.boolean(),
  //             onBoardTripComputer: faker.datatype.boolean(),
  //             multiFunctionSteeringWheelControls: faker.datatype.boolean(),
  //             alloyWheel: faker.datatype.boolean(),
  //             frontTyres: "205/55 R16",
  //             rearTyres: "205/55 R16",
  //           },
  //           specifications: {
  //             length: faker.number.int({ min: 3000, max: 5000 }),
  //             height: faker.number.int({ min: 1400, max: 1800 }),
  //             wheelBase: faker.number.int({ min: 2000, max: 3200 }),
  //             groundClearance: faker.number.int({ min: 120, max: 220 }),
  //             loadVolumeCapacity: faker.number.int({ min: 300, max: 1200 }),
  //           },
  //           engine: {
  //             powerMax: faker.number.int({ min: 70, max: 400 }),
  //             powerMaxrpm: faker.number.int({ min: 4000, max: 7000 }),
  //             torqueMax: faker.number.int({ min: 100, max: 600 }),
  //             torqueMaxrpm: faker.number.int({ min: 2000, max: 6000 }),
  //             engineSize: faker.number.int({ min: 1000, max: 5000 }),
  //             cylinders: faker.number.int({ min: 3, max: 8 }),
  //             fuelType: fuel,
  //             enginePosition: "front",
  //             transmissionType: "automatic",
  //             gearRatiosQuantity: faker.number.int({ min: 5, max: 8 }),
  //             gearShift: "lever",
  //             drivenWheels: "front",
  //           },
  //           performance: {
  //             Kph: faker.number.float({ min: 0, max: 100 }),
  //             topSpeed: faker.number.int({ min: 150, max: 300 }),
  //           },
  //           economy: {
  //             average: faker.number.float({ min: 5, max: 15 }),
  //             co2: faker.number.int({ min: 80, max: 250 }),
  //             fualRange: faker.number.int({ min: 400, max: 900 }),
  //             fualTankCapacity: faker.number.int({ min: 40, max: 80 }),
  //           },
  //           safety: {
  //             abs: true,
  //             ebd: true,
  //             tractionControl: faker.datatype.boolean(),
  //             stabilityControl: faker.datatype.boolean(),
  //             driverAirbag: true,
  //             passengerAirbag: true,
  //             airbagQuantity: faker.number.int({ min: 2, max: 8 }),
  //           },
  //           available: true,
  //           isNew: faker.datatype.boolean(),
  //           isCommercial: faker.datatype.boolean(),
  //           dealer: dealer._id,
  //           manufacturer: manufacturer._id,
  //         };
  //       })
  //     );

  //     await Deal.insertMany(
  //       Array.from({ length: 10 }).map(() => ({
  //         carId: faker.helpers.arrayElement(carDocs)._id,
  //         dealerId: faker.helpers.arrayElement(dealerDocs)._id,
  //         price: faker.number.int({ min: 15000, max: 75000 }),
  //         discount: faker.number.int({ min: 5, max: 25 }),
  //         description: faker.commerce.productDescription(),
  //         validUntil: faker.date.future(),
  //       }))
  //     );

  //     console.log("🌱 Seed complete!");
  //     await new Promise((res) => setTimeout(res, 100)); // Ensure logs flush
  //     process.exit(0);
  //   } catch (error) {
  //     console.error("❌ Seed failed:", error);
  //     process.exit(1);
  //   }
  // }

  // seed();

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <ol className='list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
          <li className='mb-2 tracking-[-.01em]'>
            Get started by editing{" "}
            <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold'>
              app/page.tsx
            </code>
            .
          </li>
          <li className='tracking-[-.01em]'>
            Save and see your changes instantly.
          </li>
        </ol>

        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto'
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'>
            <Image
              className='dark:invert'
              src='/vercel.svg'
              alt='Vercel logomark'
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'>
            Read our docs
          </a>
        </div>
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          <Image
            aria-hidden
            src='/file.svg'
            alt='File icon'
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          <Image
            aria-hidden
            src='/window.svg'
            alt='Window icon'
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          <Image
            aria-hidden
            src='/globe.svg'
            alt='Globe icon'
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
