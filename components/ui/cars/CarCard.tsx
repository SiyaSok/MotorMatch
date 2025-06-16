/** @format */

import Image from "next/image";
import { Card, CardContent, CardDescription } from "../card";
import { Badge } from "../badge";
import Link from "next/link";
import { CarTypeS } from "@/types";
import { Fuel, Gauge, Settings } from "lucide-react";
import AddToWishListButton from "./AddToWishListButton";

const CarCard = ({ car }: { car: CarTypeS }) => {
  return (
    <Card className='w-full max-w-sm pt-0' key={car.name}>
      <Link className='relative' href={`/cars/${car._id}`}>
        <Image
          src={car.imageUrls?.[0] ?? "/images/default-car.jpg"} // fallback image
          alt={car.name}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-58 object-cover rounded-t-xl'
        />

        <div className='absolute top-2 left-2 bg-black text-white px-2 py-1 rounded-md text-sm'>
          {car.year >= new Date().getFullYear() ? "New" : "Used"}
        </div>
      </Link>
      <CardContent className='space-y-2 relative'>
        <CardDescription>{car.brand}</CardDescription>
        <AddToWishListButton car={car} />
        <div>
          <div className=''>
            <div className='flex justify-between items-start '>
              <div>
                <h3 className='text-xl font-bold'>{car.model}</h3>
                <p className='text-gray-600'>{car.year}</p>
              </div>

              {/* <div className='bg-blue-100 text-black px-2 py-1 rounded-md text-sm'>
                {car.bodyType}
              </div> */}
            </div>
            <div className='my-4 flex flex-wrap gap-3'>
              <Badge className='bg-black' variant='default'>
                {car.bodyType.charAt(0).toUpperCase() + car.bodyType.slice(1)}
              </Badge>
              <Badge className='bg-black' variant='default'>
                {car.transmission.charAt(0).toUpperCase() +
                  car.transmission.slice(1)}
              </Badge>
              <Badge className='bg-black' variant='default'>
                {car.mileage} Km
              </Badge>
              <Badge className='bg-black' variant='default'>
                {car.fuelType.charAt(0).toUpperCase() + car.fuelType.slice(1)}
              </Badge>
            </div>

            <div className='my-4 flex flex-wrap gap-3'>
              <div className='flex items-center text-sm text-gray-600'>
                {car.engine && (
                  <>
                    <Gauge size={22} className='mr-1' /> {car.engine.powerMax}{" "}
                  </>
                )}
                HP
              </div>
              <div className='flex items-center text-sm text-gray-600'>
                <Fuel size={22} className='mr-1' /> {car.fuelType}
              </div>
              <div className='flex items-center text-sm text-gray-600'>
                <Settings size={22} className='mr-1' /> {car.transmission}
              </div>
            </div>

            <div className='flex justify-between items-center mt-4'>
              <span className='text-2xl font-bold'>
                R{car.price.toLocaleString()}
              </span>
              <Link
                href={`/cars/${car._id}`}
                className='bg-black hover:bg-black text-white px-8 py-4 rounded-md transition-colors'>
                View Details
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
