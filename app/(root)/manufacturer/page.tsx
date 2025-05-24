/** @format */

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getManufacturers } from "@/lib/actions/manufacturer-action";
import Image from "next/image";
import Link from "next/link";

const ManufacturerPage = async () => {
  const manufacturer = await getManufacturers();

  if (!manufacturer || manufacturer.length === 0) {
    return (
      <div className='container-xl lg:container m-auto py-6'>
        <h1 className='text-2xl font-bold'>No Manufacturers Found</h1>
        <p className='mt-4'>There are currently no manufacturers available.</p>
      </div>
    );
  }
  return (
    <div>
      <section className='py-6'>
        <div className='container-xl lg:container m-auto py-6'>
          <h1 className='text-2xl font-bold'>
            Welcome to the Manufacturer Page
          </h1>
          <p className='mt-4'>
            Here you can manage your manufacturing details, view cars, and more.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {manufacturer.map((manu) => (
              <Link href={`/manufacturer/${manu._id}`} key={manu._id}>
                <Card>
                  <div className='flex justify-center mt-4'>
                    <Image
                      src={manu.logoUrl}
                      alt={manu.name}
                      className='w-40 h-40 object-contain rounded-full bg-gray'
                      width={96}
                      height={96}
                    />
                  </div>
                  <CardContent className='mt-4'>
                    <CardTitle className='text-xl font-semibold'>
                      {manu.name}
                    </CardTitle>
                    <CardDescription className='mt-2 text-gray-600'>
                      {manu.description}
                    </CardDescription>
                    <CardDescription className='mt-2 text-gray-600'>
                      {manu.country}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturerPage;
