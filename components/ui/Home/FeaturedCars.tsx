/** @format */

import { getCars } from "@/lib/actions/cars-action";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import SkeletonCarCard from "../Skeletons/SkeletonCard";
import CarCard from "../cars/CarCard";

const FeaturedCars = async () => {
  const cars = await getCars(4);

  return (
    <section className='py-20 px-4 max-w-7xl container-xl lg:container m-auto'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-900'>Featured Vehicles</h2>
        <Link
          href='/cars'
          className='flex items-center text-black hover:text-blue-800'>
          View all cars <ArrowRight size={20} className='ml-1' />
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <Suspense
          fallback={
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCarCard key={i} />
              ))}
            </div>
          }>
          {cars.map((car) => (
            <CarCard car={car} key={car.name + car.model + car.year} />
          ))}{" "}
        </Suspense>
      </div>
    </section>
  );
};

export default FeaturedCars;
