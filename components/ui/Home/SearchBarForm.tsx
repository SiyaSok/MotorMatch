/** @format */
"use client";

import { getManufacturers } from "@/lib/actions/manufacturer-action";
import { manufacturer } from "@/types";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation"; // App Router (not next/router)
import { useEffect, useState } from "react";

const SearchBarForm = () => {
  const [car, setCar] = useState("");
  const [manufacturer, setManufacturer] = useState("All");
  const [bodyType, setBodyType] = useState("");
  //   const [minYear, setMinYear] = useState("");
  //   const [maxYear, setMaxYear] = useState("");
  const [minPriceRange, setMinPriceRange] = useState("All");
  const [maxPriceRange, setMAxPriceRange] = useState("All");

  const [manufacturers, setManufacturers] = useState<manufacturer[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const result = await getManufacturers();
        setManufacturers(result);
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
      }
    };

    fetchManufacturers();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchParams = new URLSearchParams();

    if (car) searchParams.set("car", car);
    if (manufacturer && manufacturer !== "All") {
      searchParams.set("manufacturers", manufacturer);
    }

    if (bodyType && bodyType !== "All") searchParams.set("bodyType", bodyType);

    // if (minYear) searchParams.set("minYear", minYear);
    // if (maxYear) searchParams.set("maxYear", maxYear);

    if (minPriceRange && minPriceRange !== "All")
      searchParams.set("minPriceRange", minPriceRange);
    if (maxPriceRange && maxPriceRange !== "All")
      searchParams.set("maxPriceRange", maxPriceRange);

    const query = searchParams.toString();
    router.push(`/cars${query ? `/search-results?${query}` : ""}`);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
      <form onSubmit={handleSubmit}>
        {/* Search Bar */}

        <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden'>
          <div className='flex items-center p-2'>
            <Search className='text-gray-500 ml-4' size={24} />
            <input
              type='text'
              placeholder='Search by make, model, or keyword...'
              value={car}
              onChange={(e) => setCar(e.target.value)}
              className='flex-grow p-4 outline-none text-gray-800'
            />
          </div>

          {/* Quick Filters */}
          <div className='bg-gray-100 p-4 grid grid-cols-2 md:grid-cols-2 gap-4'>
            <select
              className='p-2 border rounded-md bg-white text-gray-700'
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}>
              <option value='All'>All Makes</option>
              {manufacturers.map((manuf) => (
                <option key={manuf._id} value={manuf.name}>
                  {manuf.name}
                </option>
              ))}
            </select>

            {/* You can hook these up to state as needed later */}
            <select
              className='p-2 border rounded-md bg-white text-gray-700'
              value={bodyType}
              onChange={(e) => setBodyType(e.target.value)}>
              <option value=''>All Models</option>
              <option value='sedan'>Sedan</option>
              <option value='suv'>SUV</option>
              <option value='hatchback'>Hatchback</option>
              <option value='hatchback'>Single Cab</option>
              <option value='hatchback'>Crossover</option>
            </select>

            <select
              className='p-2 border rounded-md bg-white text-gray-700'
              value={minPriceRange}
              onChange={(e) => setMinPriceRange(e.target.value)}>
              <option value=''>Price Range</option>
              <option value='0'>R0</option>
              <option value='25000'>R25000</option>
              <option value='50000'>R50000</option>
              <option value='75000'>R75000</option>
              <option value='100000'>R100000</option>
              <option value='125000'>R125000</option>
              <option value='150000'>R150000</option>
              <option value='175000'>R175000</option>
              <option value='200000'>R200000</option>
              <option value='225000'>225000</option>
              <option value='250000'>250000</option>
              <option value='275000'>275000</option>
              <option value='300000'>300000</option>
              <option value='325000'>325000</option>
              <option value='350000'>350000</option>
              <option value='375000'>375000</option>
              <option value='400000'>400000</option>
              <option value='425000'>425000</option>
              <option value='450000'>450000</option>
              <option value='475000'>475000</option>
              <option value='500000'>500000</option>
              <option value='525000'>525000</option>
              <option value='550000'>550000</option>
              <option value='575000'>575000</option>
              <option value='600000'>600000</option>
              <option value='625000'>625000</option>
              <option value='650000'>650000</option>
              <option value='675000'>675000</option>
              <option value='700000'>700000</option>
              <option value='725000'>725000</option>
              <option value='750000'>750000</option>
              <option value='775000'>775000</option>
              <option value='800000'>800000</option>
              <option value='825000'>825000</option>
              <option value='850000'>850000</option>
              <option value='875000'>875000</option>
              <option value='900000'>900000</option>
              <option value='925000'>925000</option>
              <option value='950000'>950000</option>
              <option value='975000'>975000</option>
              <option value='1000000'>1000000</option>
              <option value='1025000'>1025000</option>
              <option value='1050000'>1050000</option>
              <option value='1075000'>1075000</option>
              <option value='1100000'>1100000</option>
              <option value='1125000'>1125000</option>
              <option value='1150000'>1150000</option>
              <option value='1175000'>1175000</option>
              <option value='1200000'>1200000</option>
              <option value='1225000'>1225000</option>
              <option value='1250000'>1250000</option>
              <option value='1275000'>1275000</option>
              <option value='1300000'>1300000</option>
              <option value='1325000'>1325000</option>
              <option value='1350000'>1350000</option>
              <option value='1375000'>1375000</option>
              <option value='1400000'>1400000</option>
              <option value='1425000'>1425000</option>
              <option value='1450000'>1450000</option>
              <option value='1475000'>1475000</option>
              <option value='1500000'>1500000</option>
              <option value='1525000'>1525000</option>
              <option value='1550000'>1550000</option>
              <option value='1575000'>1575000</option>
              <option value='1600000'>1600000</option>
              <option value='1625000'>1625000</option>
              <option value='1650000'>1650000</option>
              <option value='1675000'>1675000</option>
              <option value='1700000'>1700000</option>
              <option value='1725000'>1725000</option>
              <option value='1750000'>1750000</option>
              <option value='1775000'>1775000</option>
              <option value='1800000'>1800000</option>
              <option value='1825000'>1825000</option>
              <option value='1850000'>1850000</option>
              <option value='1875000'>1875000</option>
              <option value='1900000'>1900000</option>
              <option value='1925000'>1925000</option>
              <option value='1950000'>1950000</option>
              <option value='1975000'>1975000</option>
              <option value='2000000'>2000000</option>
            </select>
            <select
              className='p-2 border rounded-md bg-white text-gray-700'
              value={maxPriceRange}
              onChange={(e) => setMAxPriceRange(e.target.value)}>
              <option value=''>Price Range</option>
              <option value='2000000'>2000000</option>
              <option value='1975000'>1975000</option>
              <option value='1950000'>1950000</option>
              <option value='1925000'>1925000</option>
              <option value='1900000'>1900000</option>
              <option value='1875000'>1875000</option>
              <option value='1850000'>1850000</option>
              <option value='1825000'>1825000</option>
              <option value='1800000'>1800000</option>
              <option value='1775000'>1775000</option>
              <option value='1750000'>1750000</option>
              <option value='1725000'>1725000</option>
              <option value='1700000'>1700000</option>
              <option value='1675000'>1675000</option>
              <option value='1650000'>1650000</option>
              <option value='1625000'>1625000</option>
              <option value='1600000'>1600000</option>
              <option value='1575000'>1575000</option>
              <option value='1550000'>1550000</option>
              <option value='1525000'>1525000</option>
              <option value='1500000'>1500000</option>
              <option value='1475000'>1475000</option>
              <option value='1450000'>1450000</option>
              <option value='1425000'>1425000</option>
              <option value='1400000'>1400000</option>
              <option value='1375000'>1375000</option>
              <option value='1350000'>1350000</option>
              <option value='1325000'>1325000</option>
              <option value='1300000'>1300000</option>
              <option value='1275000'>1275000</option>
              <option value='1250000'>1250000</option>
              <option value='1225000'>1225000</option>
              <option value='1200000'>1200000</option>
              <option value='1175000'>1175000</option>
              <option value='1150000'>1150000</option>
              <option value='1125000'>1125000</option>
              <option value='1100000'>1100000</option>
              <option value='1075000'>1075000</option>
              <option value='1050000'>1050000</option>
              <option value='1025000'>1025000</option>
              <option value='1000000'>1000000</option>
              <option value='975000'>975000</option>
              <option value='950000'>950000</option>
              <option value='925000'>925000</option>
              <option value='900000'>900000</option>
              <option value='875000'>875000</option>
              <option value='850000'>850000</option>
              <option value='825000'>825000</option>
              <option value='800000'>800000</option>
              <option value='775000'>775000</option>
              <option value='750000'>750000</option>
              <option value='725000'>725000</option>
              <option value='700000'>700000</option>
              <option value='675000'>675000</option>
              <option value='650000'>650000</option>
              <option value='625000'>625000</option>
              <option value='600000'>600000</option>
              <option value='575000'>575000</option>
              <option value='550000'>550000</option>
              <option value='525000'>525000</option>
              <option value='500000'>500000</option>
              <option value='475000'>475000</option>
              <option value='450000'>450000</option>
              <option value='425000'>425000</option>
              <option value='400000'>400000</option>
              <option value='375000'>375000</option>
              <option value='350000'>350000</option>
              <option value='325000'>325000</option>
              <option value='300000'>300000</option>
              <option value='275000'>275000</option>
              <option value='250000'>250000</option>
              <option value='225000'>225000</option>
              <option value='200000'>R200000</option>
              <option value='175000'>R175000</option>
              <option value='150000'>R150000</option>
              <option value='125000'>R125000</option>
              <option value='100000'>R100000</option>
              <option value='75000'>R75000</option>
              <option value='50000'>R50000</option>
              <option value='25000'>R25000</option>
              <option value='0'>R0</option>
            </select>
          </div>
          <div className='p-4 '>
            <button
              type='submit'
              className='bg-black hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors w-full'>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBarForm;
