/** @format */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", text: "Home" },
    { href: "/cars", text: "Cars" },
    { href: "/manufacturers", text: "Manufacturers" },
    { href: "/dealers", text: "Car Dealers" },
  ];

  return (
    <div className=' md:ml-6'>
      <div className='flex flex-col md:flex-row'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href
                ? " bg-black text-white md:bg-white md:text-black"
                : "md:text-white text-black"
            } hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 w-full md:w-auto`}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
