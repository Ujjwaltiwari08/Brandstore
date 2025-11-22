import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoOptions } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav
      className="
        w-full z-40
        bg-white
        px-4 py-3
        rounded-t-2xl rounded-b-3xl
        shadow-lg
        flex items-center justify-between
        -mt-4         /*Blue section ke andar overlap */
        relative
      "
    >
      {/* Search Button (STATIC) */}
      <button
        className="
          flex items-center gap-2
          bg-gray-5 text-gray-800
          px-4 py-2 rounded-2xl
          text-sm font-semibold
          shrink-0
          hover:bg-gray-200 transition
          shadow-sm
        "
      >
        <FaSearch className="text-gray-700" size={16} />
        <span className="text-[13px]">Search</span>
      </button>

      {/* Scrollable Buttons */}
      <div
        className="
          flex gap-3 mx-3
          overflow-x-auto whitespace-nowrap
          scrollbar-hide
          flex-1 rounded-b-2xl rounded-t-2xl
          py-1 px-2
          bg-gray-50
        "
      >
        <button className="bg-white text-gray-900 px-4 py-2 rounded-2xl shadow text-sm font-semibold hover:bg-gray-100 transition">
          Trending
        </button>

        <button className="bg-white text-gray-900 px-4 py-2 rounded-2xl shadow text-sm font-semibold hover:bg-gray-100 transition">
          Popular
        </button>

        <button className="bg-white text-gray-900 px-4 py-2 rounded-2xl shadow text-sm font-semibold hover:bg-gray-100 transition">
          Recommended
        </button>

        <button className="bg-white text-gray-900 px-4 py-2 rounded-2xl shadow text-sm font-semibold hover:bg-gray-100 transition">
          Latest
        </button>
      </div>

      {/* Filter Icon */}
      <button
        className="
          bg-gray-5 text-gray-800
          px-3 py-3 rounded-full
          shrink-0
          hover:bg-gray-200 transition
          shadow-sm
        "
      >
        <IoOptions size={18} />
      </button>
    </nav>
  );
};

export default Navbar;

