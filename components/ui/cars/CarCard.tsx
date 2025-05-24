/** @format */

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../card";
import { Badge } from "../badge";
import Link from "next/link";
import { CarTypeS } from "@/types";

const CarCard = ({ car }: { car: CarTypeS }) => {
  return (
    <Card className='w-full max-w-sm pt-0' key={car.name}>
      <Link href={`/cars/${car._id}`}>
        <Image
          src={car.imageUrls?.[0] ?? "/images/default-car.jpg"} // fallback image
          alt={car.name}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto rounded-t-xl'
        />
      </Link>
      <CardContent className='space-y-2'>
        <CardDescription>{car.brand}</CardDescription>
        <CardTitle>
          {car.year} {car.name}
        </CardTitle>
        <div className='flex gap-2 mt-4'>
          <Badge variant='default'>
            {car.bodyType.charAt(0).toUpperCase() + car.bodyType.slice(1)}
          </Badge>
          <Badge variant='default'>
            {car.transmission.charAt(0).toUpperCase() +
              car.transmission.slice(1)}
          </Badge>
          <Badge variant='default'>{car.mileage} Km</Badge>
          <Badge variant='default'>
            {car.fuelType.charAt(0).toUpperCase() + car.fuelType.slice(1)}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <div>
          <p className='font-bold text-xl'>R{car.price.toFixed(2)}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
