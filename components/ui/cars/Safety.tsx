/** @format */

import { CircleCheckBig, CircleSlash2, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { CarTypeS } from "@/types";

const Safety = ({ car }: { car: CarTypeS }) => {
  return (
    <Accordion type='single' collapsible className='w-full mt-4'>
      <AccordionItem value='item-1' className='bg-gray-100 px-2 rounded-2xl'>
        <AccordionTrigger className='bg-gray-100 px-2 rounded-2xl'>
          {" "}
          <h2 className='font-semibold mb-2 flex items-center gap-2  text-xl'>
            <ShieldCheck size={20} /> Safety
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          <div className='p-2'>
            <ul className='space-y-1 text-sm'>
              <li className='text-lg flex justify-between'>
                {" "}
                <span className='font-bold'>ABS: </span>
                {car.safety?.abs ? (
                  <CircleCheckBig className='text-green-600' />
                ) : (
                  <CircleSlash2 className='text-red-600' />
                )}
              </li>
              <li className='text-lg flex justify-between'>
                {" "}
                <span className='font-bold'>EBD: </span>
                {car.safety?.ebd ? (
                  <CircleCheckBig className='text-green-600' />
                ) : (
                  <CircleSlash2 className='text-red-600' />
                )}
              </li>
              <li className='text-lg flex justify-between'>
                {" "}
                <span className='font-bold'> Stability Control: </span>
                {car.safety?.stabilityControl ? (
                  <CircleCheckBig className='text-green-600' />
                ) : (
                  <CircleSlash2 className='text-red-600' />
                )}
              </li>
              <li className='text-lg flex justify-between'>
                {" "}
                <span className='font-bold'> Driver Airbag: </span>
                {car.safety?.driverAirbag ? (
                  <CircleCheckBig className='text-green-600' />
                ) : (
                  <CircleSlash2 className='text-red-600' />
                )}
              </li>
              <li className='text-lg flex justify-between'>
                {" "}
                <span className='font-bold'> Passenger Airbag: </span>
                {car.safety?.passengerAirbag ? (
                  <CircleCheckBig className='text-green-600' />
                ) : (
                  <CircleSlash2 className='text-red-600' />
                )}
              </li>
              <li className='text-lg flex justify-between'>
                {" "}
                <span className='font-bold'>Airbag Count:</span>
                {car.safety?.airbagQuantity}
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Safety;
