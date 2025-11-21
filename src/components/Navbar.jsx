import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoOptions } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav
      className="
         z-50 w-full
        bg-white
        px-4 py-3
        shadow-md
        flex items-center justify-between
      "
    >
      {/* Search Buttoon (STATIC) */}
      <button
        className="
          flex items-center gap-2
          bg-gray-100 text-gray-800
          px-3 py-1 rounded-xl
          text-sm font-semibold
          shrink-0
          hover:bg-gray-200 transition
        "
      >
        <FaSearch className="text-gray-800" size={16} />
        <span>Search</span>
      </button>

      {/*  Scrollab Buttons */}
      <div
        className="
          flex gap-3 mx-3
          overflow-x-auto scrollbar-hide
          whitespace-nowrap
          flex-1
        "
      >
        <button className="bg-white text-gray-800 px-3 py-1 rounded-xl shadow text-sm font-semibold hover:bg-gray-100 transition">
          Trending
        </button>

        <button className="bg-white text-gray-800 px-3 py-1 rounded-xl shadow text-sm font-semibold hover:bg-gray-100 transition">
          Popular
        </button>

        <button className="bg-white text-gray-800 px-3 py-1 rounded-xl shadow text-sm font-semibold hover:bg-gray-100 transition">
          Recommended
        </button>

        <button className="bg-white text-gray-800 px-3 py-1 rounded-xl shadow text-sm font-semibold hover:bg-gray-100 transition">
          Latest
        </button>
      </div>

      {/* Static Icon */}
      <button
        className="
          bg-gray-100 text-gray-800
          px-3 py-3 rounded-full
          shrink-0
          hover:bg-gray-200 transition
        "
      >
        <IoOptions size={16} />
      </button>
    </nav>
  );
};

export default Navbar;

