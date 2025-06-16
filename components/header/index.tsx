/** @format */
// import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Menu from "./menu";
const Header = () => {
  return (
    <header className='bg-black sticky top-0 z-50 shadow-md'>
      <div className='flex items-center justify-between h-20 py-6 px-4 max-w-7xl container-xl lg:container m-auto  '>
        <div className='flex-start'>
          <Link href='/' className='flex-start'>
            <span className='hidden text-white lg:block font-bold text-2xl ml-3'>
              MotoMatch
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
