/** @format */

import CarCard from "@/components/ui/cars/CarCard";
import { getSingleManufacturer } from "@/lib/actions/manufacturer-action";
import Image from "next/image";
import Link from "next/link";

const ManufacturerDisplayPage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await props.params;

  const manufacturer = await getSingleManufacturer(id);

  if (!manufacturer || Object.keys(manufacturer).length === 0) {
    return (
      <div className='container-xl lg:container m-auto py-6'>
        <h1 className='text-2xl font-bold'>Manufacturer Not Found</h1>
        <p className='mt-4'>The requested manufacturer does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <section>
        <div className='relative bg-gray-900 text-white'>
          <div className='absolute inset-0 bg-black'></div>
          <div className='relative container-xl lg:container m-auto px-4 py-24 sm:px-6 lg:px-8'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
              <div className='w-32 h-32 rounded-full bg-white p-1 flex-shrink-0'>
                <Image
                  width={128}
                  height={128}
                  src={manufacturer.logoUrl || "/images/default-logo.png"}
                  alt={`${manufacturer.name} logo`}
                  className='w-full h-full object-contain rounded-full'
                />
              </div>
              <div>
                <h1 className='text-4xl font-bold'>
                  {manufacturer.name} Manufacturer
                </h1>
                <p className='mt-4 text-gray-300 max-w-2xl'>
                  {manufacturer.description}
                </p>
                <p className='mt-4 text-gray-300 max-w-2xl'>
                  {manufacturer.country}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='container-xl lg:container m-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
            {manufacturer.cars && manufacturer.cars.length > 0 ? (
              manufacturer.cars.map((car) => (
                <CarCard car={car} key={car.name + car.model + car.year} />
              ))
            ) : (
              <div className='container-xl lg:container m-auto py-6'>
                <h1 className='text-2xl font-bold'>Cars Not Found</h1>
                <p className='mt-4 w-full text-gray-600'>
                  There are currently no cars available.
                  <br />
                  You can also view our{" "}
                  <Link href='/cars' className='text-blue-500 hover:underline'>
                    Cars Page
                  </Link>{" "}
                  for more options.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturerDisplayPage;
