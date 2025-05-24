/** @format */

import SearchBar from "@/components/Home/SearchBar";
import FeaturedCars from "@/components/Home/FeaturedCars";
import PopularManufacturers from "@/components/Home/PopularManufacturers";
import TrustedDealers from "@/components/Home/TrustedDealers";
import CallToAction from "@/components/Home/CallToAction";

export default async function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <SearchBar />
      <FeaturedCars />
      <PopularManufacturers />
      <TrustedDealers />
      <CallToAction />
    </div>
  );
}
