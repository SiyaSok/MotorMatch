/** @format */

import { Gauge } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { CarTypeS } from "@/types";

const Engine = ({ car }: { car: CarTypeS }) => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1' className='bg-gray-100 px-2 rounded-2xl'>
        <AccordionTrigger className='bg-gray-100 px-2 rounded-2xl'>
          {" "}
          <h2 className='font-semibold mb-2 flex items-center gap-2 text-xl'>
            <Gauge size={20} /> Engine
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          <div className='p-2'>
            <ul className='space-y-1 text-sm'>
              <li className=' text-lg'>
                <span className='font-bold text-lg'>Power</span>:{" "}
                {car.engine?.powerMax} HP @ {car.engine?.powerMaxrpm} rpm
              </li>
              <li className=' text-lg'>
                <span className='font-bold text-lg'>Torque</span>:{" "}
                {car.engine?.torqueMax} Nm @ {car.engine?.torqueMaxrpm} rpm
              </li>
              <li className=' text-lg'>
                {" "}
                <span className='font-bold text-lg'>Power</span>: Engine Size:{" "}
                {car.engine?.engineSize} cc
              </li>
              <li className=' text-lg'>
                {" "}
                <span className='font-bold text-lg'>Cylinders</span> :{" "}
                {car.engine?.cylinders}
              </li>
              <li className=' text-lg'>
                {" "}
                <span className='font-bold text-lg'> Driven Wheels</span>:{" "}
                {car.engine?.drivenWheels}
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Engine;
