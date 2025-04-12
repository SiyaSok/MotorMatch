/** @format */

import { CarTypeS } from "@/types";

const Summary = ({ car }: { car: CarTypeS }) => {
  return (
    <div className='bg-gray-100 p-2 rounded-2xl'>
      <h2 className='text-xl font-bold flex items-center ml-2'>Summary</h2>
      <div className='p-2'>
        <ul className='space-y-1 text-sm'>
          <li className='text-lg'>
            <span className='font-bold'> Power Maximum Total:</span>{" "}
            {car.engine?.powerMax} kw
          </li>
          <li className='text-lg'>
            <span className='font-bold'>Seats quantity:</span> {car.Seats}
          </li>
          <li className='text-lg'>
            <span className='font-bold'>0-100Kph:</span>{" "}
            {car.performance?.Kph?.toFixed(2)} s
          </li>
          <li className='text-lg'>
            <span className='font-bold'>Average Fuel Economy:</span>{" "}
            {car.economy?.average?.toFixed(2)}l/100km
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Summary;
