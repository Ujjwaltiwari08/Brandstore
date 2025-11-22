import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import origlogo from "../assets/origlogo.png";

const BrandCard = () => {
  return (
    <section className="w-full text-white bg-[#05006B] rounded-b-none">
      {/* FIXED TOP SECTION */}
      <div
        className="
          fixed top-3 rounded-b-4xl rounded-t-4xl left-0 w-full
          bg-[#05006B] z-50
          p-3 pt-2 pb-2
        "
      >
        <div className="flex items-start justify-between w-full">
          {/* LOGO + TITLE website */}
          <div className="flex items-center gap-4 ml-[-10px]">
            <img
              src={origlogo}
              alt="Brand Logo"
              className="w-16 h-16 rounded-full -mt-1 ml-[8px]"
            />

            <div className="mt-0.5">
              <h1 className="text-lg font-bold leading-tight -mt-1 ml-[-4px]">
                The Lens Brand
              </h1>

              <p className="text-xs text-gray-300 whitespace-nowrap mt-0 ml-[-4px]">
                we craft lens for all your need
              </p>

              <button
                className="
                  mt-1 bg-white text-black
                  px-2 py-0.5 rounded-md
                  text-[9px] font-medium
                  flex items-center gap-1 shadow
                "
              >
                thelensbrand.com <span>↗</span>
              </button>
            </div>
          </div>

          {/* SHARE BUTTON */}
          <button
            className="
              w-8 h-11 rounded-full border border-white
              flex items-center justify-center
              hover:bg-white hover:text-black
              transition-all
              mr-[4px] mt-2
            "
          >
            <FaShareAlt size={16} />
          </button>
        </div>
      </div>

      {/* NON-STICKY BOTTOM SECTION */}
      <div className="p-5 pb-6 pt-[110px]">
        {/* Visit Store */}
        <div className="flex items-center justify-between mt-4 w-full gap-4">
          <button
            className="
              flex items-center gap-2
              bg-white text-black px-2 py-1
              rounded-full text-sm shadow ml-[-8px]
            "
          >
            <FaAmazon size={20} />
            <div className="flex flex-col leading-tight">
              <span className="text-xs -mb-[2px]">visit</span>
              <span className="text-xs -mt-[1px]">store</span>
            </div>
            <span className="text-xl font-light ml-1">›</span>
          </button>

          {/* Follow Us */}
          <div
            className="
              flex items-center gap-1
              bg-white text-black px-3 py-2
              rounded-full shadow text-sm whitespace-nowrap mr-[-6px]
            "
          >
            <span className="font-medium pl-1">Follow us</span>
            <FaInstagram size={20} className="text-pink-600 pr-1" />
            <FaSquareXTwitter size={20} className="pr-1" />
            <FaFacebookSquare size={20} className="text-blue-600 pr-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCard;

