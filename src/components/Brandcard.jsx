import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import logo from "../assets/logo.png";

const BrandCard = () => {
  return (
    <section className="bg-[#05006B] text-white p-4 w-full rounded-b-3xl sm:p-6 md:p-10">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-0">
        {/* Logo */}
        <img
          src={logo}
          alt="Brand Logo"
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full"
        />

        {/* Share Button */}
        <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
          <FaShareAlt size={16} className="sm:size-4 md:size-8" />
        </button>
      </div>

      {/* Brand Info */}
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mt-3 text-center">
        The Lens Brand
      </h1>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-1 text-center">
        we craft lens for all your need
      </p>

      {/* Website Link Box */}
      <button className="mt-3 bg-white text-black px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-xl text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-2">
        thelensbrand.com
        <span>↗</span>
      </button>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-5 gap-2 sm:gap-3">
        {/* Visit Store */}
        <button className="flex items-center gap-0.5 bg-white text-black px-1 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 rounded-full shadow text-[10px] sm:text-xs md:text-sm">
          <FaAmazon size={8} className="sm:size-4 md:size-8" />
          <span>Visit Store</span>
        </button>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-1 md:gap-2 bg-white text-black px-1 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 rounded-full shadow text-[10px] sm:text-xs md:text-sm">
          <span>Follow us</span>
          <FaInstagram
            size={8}
            className="text-pink-600 sm:size-4 md:size-8"
          />
          <FaSquareXTwitter
            size={8}
            className="text-black-400 sm:size-4 md:size-8"
          />
          <FaFacebookSquare
            size={8}
            className="text-blue-600 sm:size-4 md:size-8"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandCard;
