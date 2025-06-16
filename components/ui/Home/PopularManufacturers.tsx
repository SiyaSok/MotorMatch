/** @format */

import { getManufacturers } from "@/lib/actions/manufacturer-action";
import Image from "next/image";
import Link from "next/link";

const PopularManufacturers = async () => {
  const manufacturers = await getManufacturers(6);

  return (
    <section className='py-16 px-4 bg-gray-100'>
      <div className='max-w-7xl container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8'>Shop by Brand</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          {manufacturers.map((manufacturer) => (
            <Link
              key={manufacturer._id}
              href={`/manufacturers/${manufacturer._id}`}
              className='bg-white hover:bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center'>
              <Image
                src={manufacturer.logoUrl || "/manufacturer-placeholder.png"}
                alt={manufacturer.name}
                className='h-20 w-20 object-contain mb-3'
                width={0}
                height={0}
                sizes='100vw'
              />
              <h3 className='font-medium text-gray-900'>{manufacturer.name}</h3>
              <p className='text-sm text-gray-500 mt-1'>
                {manufacturer.country}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularManufacturers;
