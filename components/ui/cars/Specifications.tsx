/** @format */

import {
  ArrowUpDown,
  Info,
  MoveHorizontal,
  Ruler,
  Settings,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { CarTypeS } from "@/types";

const Specifications = ({ car }: { car: CarTypeS }) => {
  return (
    <Accordion type='single' collapsible className='w-full mt-4'>
      <AccordionItem value='item-1' className='bg-gray-100 px-2 rounded-2xl'>
        <AccordionTrigger className='bg-gray-100 px-2 rounded-2xl'>
          {" "}
          <h2 className='font-semibold mb-2 flex items-center gap-2  text-xl'>
            <Settings size={20} /> Specifications
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          <div className='p-2'>
            <ul className='space-y-1 text-sm'>
              <li>
                <Ruler size={16} className='inline' /> Length:{" "}
                {car.specifications?.length} mm
              </li>
              <li>
                <ArrowUpDown size={16} className='inline' /> Height:{" "}
                {car.specifications?.height} mm
              </li>
              <li>
                <MoveHorizontal size={16} className='inline' /> Wheel Base:{" "}
                {car.specifications?.wheelBase} mm
              </li>
              <li>
                <Info size={16} className='inline' /> Ground Clearance:{" "}
                {car.specifications?.groundClearance} mm
              </li>
              <li>
                <Zap size={16} className='inline' /> Load Volume:{" "}
                {car.specifications?.loadVolumeCapacity} L
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Specifications;
