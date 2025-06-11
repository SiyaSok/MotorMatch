/** @format */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", text: "Home" },
    { href: "/cars", text: "Cars" },
    { href: "/manufacturers", text: "Manufacturers" },
    { href: "/dealers", text: "Car Dealers" },
  ];

  return (
    <div id='mobile-menu'>
      <div className='space-y-1 px-2 pb-3 pt-2 flex flex-col md:hidden'>
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

export default MobileMenu;
