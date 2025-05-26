/** @format */

import { getCars } from "@/lib/actions/cars-action";
import { ArrowRight, Fuel, Gauge, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedCars = async () => {
  const featuredCars = await getCars(4);

  return (
    <section className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-900'>Featured Vehicles</h2>
        <Link
          href='/cars'
          className='flex items-center text-black hover:text-blue-800'>
          View all cars <ArrowRight size={20} className='ml-1' />
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {featuredCars.map((car) => (
          <div
            key={car._id}
            className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
            <div className='relative'>
              <Image
                src={car.imageUrls?.[0] ?? "/car-placeholder.jpg"}
                alt={`${car.brand} ${car.model}`}
                className='w-full h-58 object-cover'
                width={500}
                height={300}
                loading='lazy'
              />
              <div className='absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-md text-sm'>
                {car.year >= new Date().getFullYear() ? "New" : "Used"}
              </div>
            </div>

            <div className='p-6'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xl font-bold'>
                    {car.brand} {car.model}
                  </h3>
                  <p className='text-gray-600'>
                    {car.year} • {car.mileage.toLocaleString()} km
                  </p>
                </div>
                <div className='bg-blue-100 text-black px-2 py-1 rounded-md text-sm'>
                  {car.bodyType}
                </div>
              </div>

              <div className='my-4 flex flex-wrap gap-2'>
                <div className='flex items-center text-sm text-gray-600'>
                  {car.engine && (
                    <>
                      <Gauge size={16} className='mr-1' /> {car.engine.powerMax}{" "}
                    </>
                  )}
                  HP
                </div>
                <div className='flex items-center text-sm text-gray-600'>
                  <Fuel size={16} className='mr-1' /> {car.fuelType}
                </div>
                <div className='flex items-center text-sm text-gray-600'>
                  <Settings size={16} className='mr-1' /> {car.transmission}
                </div>
              </div>

              <div className='flex justify-between items-center mt-4'>
                <span className='text-2xl font-bold'>
                  R{car.price.toLocaleString()}
                </span>
                <Link
                  href={`/cars/${car._id}`}
                  className='bg-black hover:bg-black text-white px-4 py-2 rounded-md transition-colors'>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
