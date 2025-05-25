/** @format */

import { getManufacturers } from "@/lib/actions/manufacturer-action";
import { Filter, Search } from "lucide-react";

const SearchBar = async () => {
  const manufacturers = await getManufacturers();

  return (
    <div
      className='relative bg-gradient-to-r from-black to-black text-white py-20 px-4'
      style={{
        backgroundImage:
          "url('https://img-ik.cars.co.za/homepage/tr:q-80,w-1920/banner-home-2_yPW8t_40k.jpg?updatedAt=1741685375723')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundSize: "cover",
      }}>
      <div className='max-w-7xl mx-auto text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>
          Find Your Perfect Car
        </h1>
        <p className='text-xl md:text-2xl mb-8'>
          Browse thousands of new and used cars from trusted dealers
        </p>

        {/* Search Bar */}
        <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden'>
          <div className='flex items-center p-2'>
            <Search className='text-gray-500 ml-4' size={24} />
            <input
              type='text'
              placeholder='Search by make, model, or keyword...'
              className='flex-grow p-4 outline-none text-gray-800'
            />
            <button className='bg-black hover:bg-blue-700 text-white px-6 py-3 rounded-r-md transition-colors'>
              Search
            </button>
          </div>

          {/* Quick Filters */}
          <div className='bg-gray-100 p-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
            <select className='p-2 border rounded-md bg-white text-gray-700'>
              <option value=''>All Makes</option>
              {manufacturers.map((manuf) => (
                <option key={manuf._id} value={manuf._id}>
                  {manuf.name}
                </option>
              ))}
            </select>

            <select className='p-2 border rounded-md bg-white text-gray-700'>
              <option value=''>All Models</option>
              <option value='sedan'>Sedan</option>
              <option value='suv'>SUV</option>
              <option value='hatchback'>Hatchback</option>
            </select>

            <select className='p-2 border rounded-md bg-white text-gray-700'>
              <option value=''>Price Range</option>
              <option value='0-50000'>Under $50K</option>
              <option value='50000-100000'>$50K - $100K</option>
              <option value='100000+'>Over $100K</option>
            </select>

            <button className='flex items-center justify-center gap-2 bg-black text-white p-2 rounded-md'>
              <Filter size={18} />
              More Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
