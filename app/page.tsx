/** @format */

import CallToAction from "@/components/ui/Home/CallToAction";
import FeaturedCars from "@/components/ui/Home/FeaturedCars";
import PopularManufacturers from "@/components/ui/Home/PopularManufacturers";
import SearchBar from "@/components/ui/Home/SearchBar";
import TrustedDealers from "@/components/ui/Home/TrustedDealers";

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
