/** @format */

import CarCard from "@/components/ui/cars/CarCard";
import SkeletonCarCard from "@/components/ui/Skeletons/SkeletonCard";
import connectDB from "@/config/db";
import { convertToPlainObject } from "@/lib/utils";
import Car from "@/models/Car";
import "@/models/Manufacturer";
import { CarTypeS } from "@/types";
import { Suspense } from "react";

type paramsType = Promise<{
  manufacturers?: string;
  car?: string;
  year?: string;
  model?: string;
  bodyType?: string;
  maxPriceRange?: string;
  minPriceRange?: string;
}>;

const SearchPage = async (searchParams: { searchParams: paramsType }) => {
  const {
    manufacturers,
    car,
    year,
    model,
    bodyType,
    maxPriceRange,
    minPriceRange,
  } = await searchParams.searchParams;

  console.log("Search Params:", {
    manufacturers,
    car,
    year,
    model,
    bodyType,
    maxPriceRange,
    minPriceRange,
  });

  await connectDB();

  const buildSearchQuery = () => {
    const query: {
      $or: Array<Record<string, string | RegExp>>;
      bodyType?: { $regex: RegExp };
      price?: { $gte?: number; $lte?: number };
    } = {
      $or: [
        { "manufacturer.name": new RegExp(manufacturers || "", "i") },
        { description: new RegExp(manufacturers || "", "i") },
        { brand: new RegExp(manufacturers || "", "i") },
      ],
    };

    if (bodyType) {
      query.bodyType = { $regex: new RegExp(`^${bodyType}$`, "i") };
    }
    if (car) {
      query.$or.push({ name: new RegExp(car, "i") });
    }
    if (year) {
      query.$or.push({ year: new RegExp(year, "i") });
    }
    if (model) {
      query.$or.push({ model: new RegExp(model, "i") });
    }

    // Handle price range
    const priceQuery: { $gte?: number; $lte?: number } = {};
    const minPrice = parseFloat(minPriceRange || "");
    const maxPrice = parseFloat(maxPriceRange || "");

    if (!isNaN(minPrice)) {
      priceQuery.$gte = minPrice;
    }
    if (!isNaN(maxPrice)) {
      priceQuery.$lte = maxPrice;
    }

    if (Object.keys(priceQuery).length > 0) {
      query.price = priceQuery;
    }

    return query;
  };

  const query = buildSearchQuery();

  const carDocs = (await Car.find(query)
    .lean()
    .populate("manufacturer")
    .exec()) as unknown as CarTypeS[];

  const cars = convertToPlainObject(carDocs) as CarTypeS[];

  if (!cars || cars.length === 0) {
    return (
      <div className='container-xl lg:container m-auto py-6'>
        <h1 className='text-2xl font-bold'>No Cars Found</h1>
        <p className='mt-4'>No cars match your search criteria.</p>
      </div>
    );
  }

  return (
    <section className='py-6'>
      <div className='py-6 px-4 max-w-7xl container-xl lg:container m-auto'>
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
              <CarCard car={car} key={`${car._id}-${car.model}-${car.year}`} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
