/** @format */

import Sidebar from "@/components/ui/profile/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MotoMatch - Profile",
  keywords: [
    "cars",
    "motorcycles",
    "vehicles",
    "buy cars",
    "sell cars",
    "car marketplace",
    "motorcycle marketplace",
    "vehicle listings",
    "car dealers",
    "motorcycle dealers",
    "used cars",
  ],
  description: "MotoMatch - Profile Page",
  openGraph: {
    title: "MotoMatch - Profile",
    description: "MotoMatch - Profile Page",
    url: "https://motomatch.com/profile",
    siteName: "MotoMatch",
    images: [
      {
        url: "https://motomatch.com/images/profile-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MotoMatch Profile Page",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <section className=' px-4 max-w-7xl container-xl lg:container m-auto'>
        <div className='flex'>
          <div className='hidden md:block h-screen  w-[300px] '>
            <Sidebar />
          </div>
          <div className='p-5 w-full md:max-w-[1140px]'>{children}</div>
        </div>
      </section>
    </html>
  );
}
