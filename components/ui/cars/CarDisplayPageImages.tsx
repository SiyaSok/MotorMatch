/** @format */

import { CarTypeS } from "@/types";
import Image from "next/image";

const CarDisplayPageImages = ({ car }: { car: CarTypeS }) => {
  return (
    <div className='w-full'>
      <Image
        src={car.imageUrls?.[0] || "/placeholder.jpg"}
        alt={car.name}
        width={800}
        height={400}
        className='w-full h-auto rounded-lg shadow-md'
      />
      <div className='flex gap-4 mt-4'>
        {car.imageUrls?.slice(1).map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`${car.name}-${index}`}
            width={120}
            height={80}
            className='rounded-md border shadow-sm'
          />
        ))}
      </div>
    </div>
  );
};

export default CarDisplayPageImages;
