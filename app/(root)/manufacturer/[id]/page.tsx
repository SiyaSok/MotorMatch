/** @format */

import CarCard from "@/components/ui/cars/CarCard";
import { getSingleManufacturer } from "@/lib/actions/manufacturer-action";
import Image from "next/image";

const ManufacturerDisplayPage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await props.params;

  const manufacturer = await getSingleManufacturer(id);

  return (
    <div>
      <section className='py-6'>
        <div className='container-xl lg:container m-auto'>
          <div className='flex flex-col md:flex-row items-center gap-6'>
            <div>
              <Image
                src={manufacturer.logoUrl || "/images/default-logo.png"}
                alt={manufacturer.name}
                className='bg-black object-contain rounded-full bg-gray'
                width={60}
                height={60}
              />
            </div>
            <div>
              <h1 className='text-2xl font-bold'>
                Welcome to the {manufacturer.name} Manufacturer Page
              </h1>
              <p>{manufacturer.description || "No description available."}</p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
            {manufacturer.cars.map((car) => (
              <CarCard car={car} key={car.name + car.model + car.year} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturerDisplayPage;
