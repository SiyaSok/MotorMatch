/** @format */

import { ShieldCheck } from "lucide-react";
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
              <li className='text-lg'>ABS: {car.safety?.abs ? "Yes" : "No"}</li>
              <li className='text-lg'>EBD: {car.safety?.ebd ? "Yes" : "No"}</li>
              <li className='text-lg'>
                Stability Control: {car.safety?.stabilityControl ? "Yes" : "No"}
              </li>
              <li className='text-lg'>
                Driver Airbag: {car.safety?.driverAirbag ? "Yes" : "No"}
              </li>
              <li className='text-lg'>
                Passenger Airbag: {car.safety?.passengerAirbag ? "Yes" : "No"}
              </li>
              <li className='text-lg'>
                Airbag Count: {car.safety?.airbagQuantity}
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Safety;
