/** @format */

import { Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { CarTypeS } from "@/types";

const Features = ({ car }: { car: CarTypeS }) => {
  return (
    <Accordion type='single' collapsible className='w-full mt-4'>
      <AccordionItem value='item-1' className='bg-gray-100 px-2 rounded-2xl'>
        <AccordionTrigger>
          {" "}
          <h2 className='font-semibold mb-2 flex items-center gap-2  text-xl'>
            <Users size={20} /> Features
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          <div className='mt-2 p-2'>
            <ul className='grid grid-cols-2 gap-2 text-sm'>
              {Object.entries(car.features || {}).map(([feature, value]) => (
                <li className='text-lg' key={feature}>
                  {feature.replace(/([A-Z])/g, " $1")}:{" "}
                  {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                </li>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Features;
