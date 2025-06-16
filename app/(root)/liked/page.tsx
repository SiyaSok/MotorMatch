/** @format */

import CarCard from "@/components/ui/cars/CarCard";
import SkeletonCarCard from "@/components/ui/Skeletons/SkeletonCard";
import { getUserFavorites } from "@/lib/actions/wishList.action";
import { Suspense } from "react";

const LikedPage = async () => {
  const cars = await getUserFavorites();
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

export default LikedPage;
