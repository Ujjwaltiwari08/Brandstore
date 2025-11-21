import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import logo from "../assets/logo.png";

const BrandCard = () => {
  return (
    <section className="w-full text-white bg-[#05006B] rounded-b-none">
      {/* 🔺 STICKY TOP SECTION */}
      <div
        className="
          sticky top-0 z-50
          bg-[#05006B]
          p-5 pt-6
        "
      >
        <div className="flex items-start justify-between w-full">
          {/* LOGO + TITLE */}
          <div className="flex items-center gap-4 ml-[-10px]">
            <img
              src={logo}
              alt="Brand Logo"
              className="w-16 h-16 rounded-full -mt-1 ml-[-2px]"
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
              mr-[-6px] mt-2
            "
          >
            <FaShareAlt size={16} />
          </button>
        </div>
      </div>

      {/* 🔻 NON-STICKY BOTTOM SECTION */}
      <div className="p-5 pb-6">
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

