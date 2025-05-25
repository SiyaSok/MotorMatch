/** @format */
import { getCars } from "@/lib/actions/cars-action";
import CarCard from "@/components/ui/cars/CarCard";
import { Suspense } from "react";
import SkeletonCarCard from "@/components/ui/Skeletons/SkeletonCard";

const Cars = async () => {
  const cars = await getCars();

  return (
    <section className='py-6'>
      <div className='py-6 px-4 max-w-7xl   container-xl lg:container m-auto '>
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
      </div>
    </section>
  );
};

export default Cars;
