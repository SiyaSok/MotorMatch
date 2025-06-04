/** @format */

import CallToAction from "@/components/ui/Home/CallToAction";
import FeaturedCars from "@/components/ui/Home/FeaturedCars";
import InfoBoxes from "@/components/ui/Home/InfoBoxes";
import PopularManufacturers from "@/components/ui/Home/PopularManufacturers";
import SearchBar from "@/components/ui/Home/SearchBar";
import TrustedDealers from "@/components/ui/Home/TrustedDealers";
// import { migration } from "@/lib/actions/migration";

export default async function Home() {
  // const res = await migration();
  return (
    <div className='min-h-screen bg-gray-50'>
      <SearchBar />
      <FeaturedCars />
      <PopularManufacturers />
      <InfoBoxes />
      <CallToAction />
      <TrustedDealers />
    </div>
  );
}
