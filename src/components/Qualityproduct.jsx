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
    {
      image: product1,
      title: "Elegant Vision",
      desc: "Premium glasses for a refined look and clear vision.",
    },
    {
      image: product2,
      title: "Urban Style",
      desc: "Trendy frames designed for the modern lifestyle.",
    },
    {
      image: product3,
      title: "Comfort Fit",
      desc: "Lightweight glasses that offer all-day comfort.",
    },
    {
      image: product4,
      title: "Durable Design",
      desc: "Built to last with high-quality materials and craftsmanship.",
    },
    {
      image: product5,
      title: "Colorful Choices",
      desc: "Express yourself with a variety of vibrant frame colors and best looks.",
    },
    {
      image: product6,
      title: "Bold Statement",
      desc: "Make an impression with unique and eye-catching designs.",
    },
  ];

  return (
    <section className="p-4 grid grid-cols-1 gap-6 bg-gray-200 sm:p-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
      {list.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4 shadow-lg rounded-2xl bg-white sm:p-6 md:rounded-3xl">
          <img src={item.image} alt={item.title} className="mb-3 w-40 h-28 object-cover rounded-xl sm:w-56 sm:h-36 md:w-92 md:h-62 md:rounded-2xl" />
          <h3 className="text-lg font-semibold mb-1 text-center sm:text-xl md:text-2xl md:mb-2">{item.title}</h3>
          <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg">{item.desc}</p>
          <button className="mt-3 px-6 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg shadow hover:bg-gray-800 transition-colors duration-200 flex flex-col items-center sm:mt-4 sm:px-12 sm:py-3 sm:text-base md:px-20 md:py-4 md:text-lg md:rounded-xl">
            Buy Now
            <span className="flex flex-row items-center justify-center gap-2 mt-2">
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

export default Qualityproduct;
