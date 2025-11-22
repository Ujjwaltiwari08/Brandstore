import React from "react";
import feature1 from "../assets/sunglasses1.png";
import feature2 from "../assets/sunglasses2.png";
import feature3 from "../assets/sunglasses3.jpg";
import feature4 from "../assets/sunglasses4.jpg";
import feature5 from "../assets/sunglasses5.jpg";
import feature6 from "../assets/jess-bailey-WeCoLo0Rxp4-unsplash (1).jpg";

import { SiFlipkart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Features = () => {
  const list = [
    { image: feature1, title: "Elegant Vision", desc: "Premium glasses for a refined look and clear vision." },
    { image: feature2, title: "Urban Style", desc: "Trendy frames designed for the modern lifestyle for own life." },
    { image: feature3, title: "Comfort Fit", desc: "Lightweight glasses that offer all-day comfort." },
    { image: feature4, title: "Durable Design", desc: "Built to last with high-quality materials." },
    { image: feature5, title: "Colorful Choices", desc: "Express yourself with vibrant frame colors." },
    { image: feature6, title: "Bold Statement", desc: "Make an impression with unique designs." },
  ];

  return (
    <section className="px-3 py-5 grid grid-cols-2 gap-4 bg-[#F2F3F5]">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start pt-3 px-3 pb-4 bg-white rounded-2xl shadow-md"
        >
          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-36 rounded-xl object-cover"
          />

          {/* BADGE for cart like amazon flipkart */}
          <div className="mt-2 flex items-center gap-1 bg-white px-1 py-1 rounded-full shadow self-start">
            <div className="flex -space-x-2">
              <span className="w-4 h-4 bg-yellow-300 rounded-full flex items-center justify-center text-xs border border-white">
                <SiFlipkart size={12} />
              </span>
              <span className="w-4 h-4 bg-orange-300 rounded-full flex items-center justify-center text-xs border border-white">
                <FaAmazon size={12} />
              </span>
              <span className="w-4 h-4 bg-pink-300 rounded-full flex items-center justify-center text-xs border border-white">
                <FaShoppingBag size={12} />
              </span>
            </div>

            <span className="text-[8px] text-gray-1000 ml-1">+ 2 more</span>
          </div>

          {/* TITLE */}
          <h3 className="mt-3 text-[15px] font-semibold leading-tight">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-[11px] leading-tight mt-1">
            {item.desc}
          </p>

          {/* BUY BUTTON */}
          <button className="mt-3 w-full py-2 bg-black text-white text-[12px] font-semibold rounded-2xl shadow">
            Buy Now
          </button>
        </div>
      ))}
    </section>
  );
};

export default Features;

