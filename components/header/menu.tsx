/** @format */

import { EllipsisVertical } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";
import NavLinks from "../ui/layout/NavLinks";
import Link from "next/link";
const Menu = () => {
  return (
    <div className='flex justify-between w-full md:justify-end gap-3 md:w-auto'>
      <nav className='hidden md:flex w-full  gap-1'>
        <NavLinks />
        <UserButton />
      </nav>

      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <EllipsisVertical className='text-white' />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <SheetDescription className='w-full p-4'>
              <NavLinks />
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
      <div className='flex-start'>
        <Link href='/' className='flex-start'>
          <span className=' text-white lg:hidden font-bold text-2xl ml-3'>
            MotoMatch
          </span>
        </Link>
      </div>
      <div className='md:hidden'>
        <UserButton />
      </div>
    </div>
  );
};

export default Menu;
