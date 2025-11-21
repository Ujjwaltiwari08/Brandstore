import React from "react";
import feature1 from "../assets/giorgio-trovato-K62u25Jk6vo-unsplash.jpg";
import feature2 from "../assets/chuttersnap-G8ioIHUDfNc-unsplash.jpg";
import feature3 from "../assets/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg";
import feature4 from "../assets/dmitry-ratushny-wpi3sDUrSEk-unsplash.jpg";
import feature5 from "../assets/sincerely-media-d05w6_7FaPM-unsplash.jpg";
import feature6 from "../assets/jess-bailey-WeCoLo0Rxp4-unsplash (1).jpg";

import { SiFlipkart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Features = () => {
  const list = [
    {
      image: feature1,
      title: "Elegant Vision",
      desc: "Premium glasses for a refined look and clear vision.",
    },
    {
      image: feature2,
      title: "Urban Style",
      desc: "Trendy frames designed for the modern lifestyle for own life.",
    },
    {
      image: feature3,
      title: "Comfort Fit",
      desc: "Lightweight glasses that offer all-day comfort.",
    },
    {
      image: feature4,
      title: "Durable Design",
      desc: "Built to last with high-quality materials.",
    },
    {
      image: feature5,
      title: "Colorful Choices",
      desc: "Express yourself with vibrant frame colors.",
    },
    {
      image: feature6,
      title: "Bold Statement",
      desc: "Make an impression with unique designs.",
    },
  ];

  return (
    <section className="px-3 py-5 grid grid-cols-2 gap-4 bg-[#F2F3F5]">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-3 bg-white rounded-2xl shadow-md"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-28 rounded-xl object-cover"
          />

          <h3 className="mt-2 text-[15px] font-semibold text-center">
            {item.title}
          </h3>

          <p className="text-gray-600 text-[11px] text-center leading-tight mt-1">
            {item.desc}
          </p>

          <button className="mt-2 w-full py-2 bg-black text-white text-[12px] font-semibold rounded-xl shadow flex flex-col items-center">
            Buy Now
            <span className="flex flex-row items-center justify-center gap-2 mt-1 text-[15px]">
              <SiFlipkart />
              <FaAmazon />
              <FaShoppingBag />
              <MdOutlineShoppingCart />
            </span>
          </button>
        </div>
      ))}
    </section>
  );
};

export default Features;
