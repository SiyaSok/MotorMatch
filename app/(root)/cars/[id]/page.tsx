/** @format */

// import { Badge } from "@/components/ui/badge";
// import {
//   Gauge,
//   Wallet,
//   Armchair,
//   Car,
//   Fuel,
//   Cog,
//   CircleGauge,
// } from "lucide-react";

import { getSingleCars } from "@/lib/actions/cars-action";
// import CarDisplayPageImages from "@/components/ui/cars/CarDisplayPageImages";
// import Engine from "@/components/ui/cars/Engine";
// import PerformanceEconomy from "@/components/ui/cars/PerformanceEconomy";
// import Safety from "@/components/ui/cars/Safety";
// import Features from "@/components/ui/cars/Features";
// import Specifications from "@/components/ui/cars/Specifications";

const CarDisplayPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  const car = await getSingleCars(id);

  // await connectDB();
  // const car = await Car.findById(id).lean();

  // //  const property = ConvertToSerializableObject(propertyDocs);

  console.log(car);
  return (
    <>{id}</>
    // <section className='container mx-auto px-4 py-8'>
    //   <div className='grid md:grid-cols-2 gap-8'>
    //     <CarDisplayPageImages car={car} />
    //     <div className='space-y-4'>
    //       <h1 className='text-3xl font-bold flex items-center gap-2'>
    //         {car.brand} {car.year} {car.name} ({car.model})
    //       </h1>
    //       <p className='text-2xl font-bold text-green-600 flex items-center gap-1'>
    //         <Wallet size={22} /> R
    //         {car.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
    //       </p>
    //       <div className='flex gap-3 flex-wrap'>
    //         <Badge variant='default'>{car.brand}</Badge>
    //         <Badge variant='outline'>Seats: {car.Seats}</Badge>
    //         <Badge variant='outline'>Body: {car.bodyType}</Badge>
    //         <Badge variant='outline'>Fuel: {car.fuelType}</Badge>
    //         <Badge variant='outline'>Transmission: {car.transmission}</Badge>
    //         <Badge variant='outline'>
    //           Mileage: {car.mileage.toLocaleString()} Km
    //         </Badge>
    //       </div>
    //       <div className='grid grid-cols-3 gap-6'>
    //         <div className='flex items-center flex-col'>
    //           <CircleGauge className='w-8 h-8' />
    //           <span className='text-xl font-bold'>Mileage</span>{" "}
    //           {car.mileage.toLocaleString()} Km
    //         </div>
    //         <div className='flex items-center flex-col'>
    //           <Car className='w-8 h-8' />{" "}
    //           <span className='text-xl font-bold'>Body</span> {car.bodyType}
    //         </div>
    //         <div className='flex items-center flex-col'>
    //           {" "}
    //           <Armchair className='w-8 h-8' />{" "}
    //           <span className='text-xl font-bold'>Seats</span> {car.Seats}
    //         </div>

    //         <div className='flex items-center flex-col'>
    //           <Fuel className='w-8 h-8' />
    //           <span className='text-xl font-bold'>Fuel</span> {car.fuelType}
    //         </div>
    //         <div className='flex items-center flex-col'>
    //           <Cog className='w-8 h-8' />
    //           <span className='text-xl font-bold'>Transmission</span>{" "}
    //           {car.transmission}
    //         </div>

    //         <div className='flex items-center flex-col'>
    //           <Gauge className='w-8 h-8' />
    //           <span className='text-xl font-bold'>Mileage</span>{" "}
    //           {car.performance?.topSpeed} Km/h
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='space-y-4'>
    //     <div className='grid mt-6'>
    //       <Engine car={car} />
    //       <PerformanceEconomy car={car} />
    //       <Safety car={car} />
    //       <Features car={car} />
    //       <Specifications car={car} />
    //     </div>
    //   </div>
    // </section>
  );
};

export default CarDisplayPage;
