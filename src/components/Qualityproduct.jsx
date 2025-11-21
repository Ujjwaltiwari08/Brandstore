import React from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";

import { SiFlipkart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Qualityproduct = () => {
  const list = [
    { image: product1, title: "Elegant Vision", desc: "Premium glasses for a refined look and clear vision." },
    { image: product2, title: "Urban Style", desc: "Trendy frames designed for the modern lifestyle for own life." },
    { image: product3, title: "Comfort Fit", desc: "Lightweight glasses that offer all-day comfort." },
    { image: product4, title: "Durable Design", desc: "Built to last with high-quality materials and craftsmanship." },
    { image: product5, title: "Colorful Choices", desc: "Express yourself with vibrant frame colors and styles." },
    { image: product6, title: "Bold Statement", desc: "Make an impression with unique and eye-catching designs." },
  ];

  return (
    <section className="px-4 py-6 bg-gray-200">
      <div className="grid grid-cols-2 gap-4">
        
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-3 flex flex-col items-center"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-36 object-cover rounded-xl mb-3"
            />

            {/* Title */}
            <h3 className="text-base font-semibold text-center mb-1">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-600 text-center mb-3">
              {item.desc}
            </p>

            {/* Button */}
            <button className="w-full bg-gray-900 text-white text-sm font-semibold py-2 rounded-lg shadow flex flex-col items-center">
              Buy Now
              <div className="flex items-center justify-center gap-2 mt-1 text-lg">
                <SiFlipkart />
                <FaAmazon />
                <FaShoppingBag />
                <MdOutlineShoppingCart />
              </div>
            </button>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Qualityproduct;
