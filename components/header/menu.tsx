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
const Menu = () => {
  return (
    <div className='flex justify-end gap-3'>
      <nav className='hidden md:flex w-full  gap-1'>
        <NavLinks />
        <UserButton />
      </nav>
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              {/* <Button asChild variant='ghost'>
                <Link href='/cart'>
                  <ShoppingCart className='' /> Cart
                </Link>
              </Button> */}
              <UserButton />
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
