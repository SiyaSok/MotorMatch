/** @format */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import UserButton from "./UserButton";

const Navbar = () => {
  const [isMoblieMenuOpen, setIsMoblieMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <nav className='bg-black sticky top-0 z-50 shadow-md'>
      <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setIsMoblieMenuOpen((prev) => !prev)}>
              <span className='absolute -inset-0.5'></span>
              {/* <!-- Logo --> */}

              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
            <Link className='flex flex-shrink-0 items-center' href='/'>
              {/* <Image className='h-10 w-auto' src={""} alt='PropertyPulse' /> */}

              <span className='block md:hidden text-white text-center text-2xl font-bold ml-2'>
                MotoMatch.COM
              </span>
            </Link>
          </div>

          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            {/* <!-- Logo --> */}
            <Link className='flex flex-shrink-0 items-center' href='/'>
              {/* <Image className='h-10 w-auto' src={""} alt='PropertyPulse' /> */}

              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                MotoMatch.COM
              </span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                <Link
                  href='/'
                  className={`${
                    pathname === "/" ? "bg-white text-black" : "text-white "
                  }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                  Home
                </Link>
                <Link
                  href='/cars'
                  className={`${
                    pathname === "/cars" ? "bg-white text-black" : " text-white"
                  }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                  {" "}
                  Cars
                </Link>
                <Link
                  href='/manufacturers'
                  className={`${
                    pathname === "/manufacturers"
                      ? "bg-white text-black"
                      : "text-white "
                  }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                  {" "}
                  Manufacturers
                </Link>
                <Link
                  href='/dealers'
                  className={`${
                    pathname === "/dealers"
                      ? "bg-white text-black"
                      : "text-white "
                  }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                  {" "}
                  Car Dealers
                </Link>
                {/* {session && (
                  <Link
                    href='/properties/add'
                    className={`${
                      pathname === "/properties/add" ? "bg-black" : " "
                    } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
                    Add Property
                  </Link>
                )} */}
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          <UserButton />
          {/* <!-- Right Side Menu (Logged In) --> */}
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMoblieMenuOpen && (
        <div id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2 flex flex-col  md:hidden'>
            <Link
              href='/'
              className={`${
                pathname === "/" ? "bg-white text-black" : "text-white "
              }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
              Home
            </Link>
            <Link
              href='/cars'
              className={`${
                pathname === "/cars" ? "bg-white text-black" : " text-white"
              }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
              {" "}
              Cars
            </Link>
            <Link
              href='/manufacturers'
              className={`${
                pathname === "/manufacturers"
                  ? "bg-white text-black"
                  : "text-white "
              }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
              {" "}
              Manufacturers
            </Link>
            <Link
              href='/dealers'
              className={`${
                pathname === "/dealers" ? "bg-white text-black" : "text-white "
              }  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
              {" "}
              Car Dealers
            </Link>
            {/* {session && (
              <Link
                href='/properties/add'
                className={`${
                  pathname === "/properties/add" ? "bg-black" : ""
                } text-white block rounded-md px-3 py-2 text-base font-medium`}>
                Add Property
              </Link>
            )} */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
