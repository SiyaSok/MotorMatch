/** @format */
"use client";
import { CarTypeS } from "@/types";
import Image from "next/image";
import { useState } from "react";

const CarDisplayPageImages = ({ car }: { car: CarTypeS }) => {
  const [current, setCutrrent] = useState(0);
  return (
    <div className='w-full'>
      <Image
        src={car.imageUrls?.[current] || "/placeholder.jpg"}
        alt={car.name}
        width={800}
        height={400}
        className='w-full h-auto rounded-lg shadow-md'
      />

      <div className='flex gap-4 mt-4'>
        {car.imageUrls?.map((url, index) => (
          <div
            className='
          flex'
            key={index}
            onClick={() => setCutrrent(index)}>
            <Image
              key={index}
              src={url}
              alt={`${car.name}-${index}`}
              width={120}
              height={80}
              className='rounded-md border shadow-sm'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDisplayPageImages;
