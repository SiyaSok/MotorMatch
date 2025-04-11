/** @format */

import { Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { CarTypeS } from "@/types";

const PerformanceEconomy = ({ car }: { car: CarTypeS }) => {
  return (
    <Accordion type='single' collapsible className='w-full mt-4'>
      <AccordionItem value='item-1' className='bg-gray-100 px-2 rounded-2xl'>
        <AccordionTrigger className='bg-gray-100 px-2 rounded-2xl'>
          {" "}
          <h2 className='font-semibold mb-2 flex items-center gap-2  text-xl'>
            <Zap size={20} /> Performance & Economy
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          <div className='p-2'>
            <ul className='space-y-1 text-sm'>
              <li>Top Speed: {car.performance?.topSpeed} Km/h</li>
              <li>Acceleration: {car.performance?.Kph?.toFixed(2)} Kph</li>
              <li>Average: {car.economy?.average?.toFixed(2)} L/100km</li>
              <li>CO2: {car.economy?.co2} g/km</li>
              <li>Range: {car.economy?.fualRange} km</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PerformanceEconomy;
