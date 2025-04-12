/** @format */

import { CarTypeS } from "@/types";
import { Armchair, Car, Cog, Fuel, Gauge, CircleGauge } from "lucide-react";

const CarSumIcon = ({ car }: { car: CarTypeS }) => {
  return (
    <div className='grid grid-cols-3 gap-6'>
      <div className='flex items-center flex-col'>
        <CircleGauge className='w-8 h-8' />
        <span className='text-xl font-bold'>Mileage</span>{" "}
        {car.mileage.toLocaleString()} Km
      </div>
      <div className='flex items-center flex-col'>
        <Car className='w-8 h-8' />{" "}
        <span className='text-xl font-bold'>Body</span> {car.bodyType}
      </div>
      <div className='flex items-center flex-col'>
        {" "}
        <Armchair className='w-8 h-8' />{" "}
        <span className='text-xl font-bold'>Seats</span> {car.Seats}
      </div>

      <div className='flex items-center flex-col'>
        <Fuel className='w-8 h-8' />
        <span className='text-xl font-bold'>Fuel</span> {car.fuelType}
      </div>
      <div className='flex items-center flex-col'>
        <Cog className='w-8 h-8' />
        <span className='text-xl font-bold'>Transmission</span>{" "}
        {car.transmission}
      </div>

      <div className='flex items-center flex-col'>
        <Gauge className='w-8 h-8' />
        <span className='text-xl font-bold'>Mileage</span>{" "}
        {car.performance?.topSpeed} Km/h
      </div>
    </div>
  );
};

export default CarSumIcon;
