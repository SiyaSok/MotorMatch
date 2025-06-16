/** @format */
// import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Menu from "./menu";
const Header = () => {
  return (
    <header className='bg-black sticky top-0 z-50 shadow-md'>
      <div className='flex items-center justify-between max-w-7xl mx-auto px-4 py-2 x h-20 '>
        <div className='flex-start'>
          <Link href='/' className='flex-start'>
            <span className='hidden text-white lg:block font-bold text-2xl ml-3'>
              Moto Match
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
