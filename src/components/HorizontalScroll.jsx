import React from "react";
import ProductCard from "./ProductCard";
import glasses5 from "../assets/glasses5.jpg";
import glasses6 from "../assets/glasses6.jpg";
import glasses7 from "../assets/glasses7.jpg";
import glasses8 from "../assets/glasses8.jpg";
import glasses9 from "../assets/glasses9.jpg";
import glasses10 from "../assets/glasses10.jpg";
import glasses11 from "../assets/glasses11.jpg";

const HorizontalScroll = () => {
  const products = [
    { image: glasses5, title: "The Lens Brand", subtitle: "Adjustable Fit" },
    { image: glasses6, title: "Modern Fit", subtitle: "Premium Design" },
    { image: glasses7, title: "Classic Wear", subtitle: "Daily Comfort" },
    { image: glasses8, title: "Retro Look", subtitle: "New Arrival" },
    { image: glasses9, title: "The Lens Brand", subtitle: "Adjustable Fit" },
    { image: glasses10, title: "Modern Fit", subtitle: "Premium Design" },
    { image: glasses11, title: "Classic Wear", subtitle: "Daily Comfort" },
  ];

  return (
    <div className="px-2 mt-4 sm:px-4 sm:mt-6">
      <h2 className="text-lg font-bold mb-2 sm:text-xl sm:mb-3">
        Popular Products
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-3 sm:gap-4 py-2">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
