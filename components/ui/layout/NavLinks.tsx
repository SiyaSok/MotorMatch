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
    <div className='hidden md:ml-6 md:block'>
      <div className='flex '>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href ? "bg-white text-black" : "text-white"
            } hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
