import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="
      sticky top-0 w-full z-50
      bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500
      px-4 py-3
      rounded-2xl shadow-lg
      flex flex-col gap-3
      mt-2
      md:flex-row md:justify-between md:items-center md:px-8 md:py-4
    ">
      
      {/* Brand Name */}
      <h1 className="
        text-xl font-extrabold text-white tracking-wide drop-shadow 
        text-center 
        md:text-3xl md:text-left
      ">
        The Lens Brand
      </h1>

      {/* BUTTONS SECTION */}
      <div className="
        flex gap-3 overflow-x-auto scrollbar-hide 
        pb-2
        md:pb-0 md:gap-4 md:text-lg md:flex-nowrap
      ">

        {/* Search Button */}
        <button className="
          bg-white text-blue-900 px-4 py-2 rounded-lg shadow
          flex items-center gap-3 text-sm font-semibold
          hover:bg-gray-100 transition
          
          md:px-8 md:py-3 md:rounded-xl md:text-xl
        ">
          <FaSearch className="text-blue-900" />
          <span>Search</span>
        </button>

        {/* Trending */}
        <button className="
          bg-white text-blue-900 px-4 py-2 rounded-lg shadow 
          text-sm font-semibold
          hover:bg-gray-100 transition

          md:px-8 md:py-3 md:rounded-xl md:text-xl
        ">
          Trending
        </button>

        {/* Popular */}
        <button className="
          bg-white text-blue-900 px-4 py-2 rounded-lg shadow 
          text-sm font-semibold
          hover:bg-gray-100 transition 

          md:px-8 md:py-3 md:rounded-xl md:text-xl
        ">
          Popular
        </button>

        {/* Latest */}
        <button className="
          bg-white text-blue-900 px-4 py-2 rounded-lg shadow 
          text-sm font-semibold
          hover:bg-gray-100 transition 

          md:px-8 md:py-3 md:rounded-xl md:text-xl
        ">
          Latest
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
