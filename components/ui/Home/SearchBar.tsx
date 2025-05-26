/** @format */

import SearchBarForm from "./SearchBarForm";

const SearchBar = () => {
  return (
    <div
      className='relative bg-gradient-to-r from-black to-black text-white py-20 px-4'
      style={{
        backgroundImage: "url('/bg11.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundSize: "cover",
      }}>
      <div className='max-w-7xl mx-auto text-start py-2'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6 md:px-4'>
          Find Your Perfect Car
        </h1>
        <p className='text-xl md:text-2xl mb-4 md:px-4'>
          Browse thousands of new and used cars from trusted dealers
        </p>

        <SearchBarForm />
      </div>
    </div>
  );
};

export default SearchBar;
