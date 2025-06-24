/** @format */
"use client";
import { signOutUser } from "@/lib/actions/user.action";
import { Settings, User, File, Car, HouseIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className='h-screen sticky top-0'>
      <div className='bg-black text-white shadow-sm p-2 h-full'>
        <div>
          <h2 className='text-lg font-semibold px-3 py-2 w-full md:w-auto mb-2'>
            My Profile
          </h2>
          <div className='text-sm text-gray-500 px-2 pb-1'>
            {[
              {
                icon: <User className='h-4 w-4' />,
                label: "Personal Details",
                href: "/profile",
              },
              {
                icon: <File className='h-4 w-4' />,
                label: "Documents",
                href: "/profile/documents",
              },
              {
                icon: <Car className='h-4 w-4' />,
                label: "My Vehicles",
                href: "/profile/vehicles",
              },
              {
                icon: <HouseIcon className='h-4 w-4' />,
                label: "My Finance Applications",
                href: "/",
              },
              {
                icon: <Settings className='h-4 w-4' />,
                label: "Settings",
                href: "/",
              },
            ].map(({ icon, label, href }, index) => (
              <div
                key={index}
                className={`${
                  pathname === href
                    ? "bg-white text-black"
                    : "bg-blue-400 text-black"
                } hover:bg-gray-100 rounded-md px-3 py-2 w-full md:w-auto mb-2`}>
                <Link
                  href={href}
                  className='flex items-center gap-2 w-full px-2 py-2'>
                  {icon}
                  <span>{label}</span>
                </Link>
              </div>
            ))}

            <form action={signOutUser} className='w-full'>
              <Button
                className='
                     bg-blue-400 text-black
                 hover:bg-gray-100 rounded-md px-3 py-2 w-full mb-2'
                variant='ghost'>
                <LogOutIcon className='mr-1' />
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
