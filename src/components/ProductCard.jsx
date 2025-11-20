import React from "react";

const ProductCard = ({ image, title, subtitle }) => {
  return (
    <div className="min-w-[230px] sm:min-w-[260px] max-w-[260px] mr-4 flex-shrink-0">
      <div className="relative rounded-3xl overflow-hidden shadow-lg">

        {/* Background Image */}
        <img
          src={image}
          alt="product"
          className="w-full h-48 sm:h-60 object-cover"
        />

        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Text + Button */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="text-white">
            <p className="font-semibold text-base sm:text-lg leading-tight">
              {title}
            </p>
            <p className="text-xs sm:text-sm text-gray-200">{subtitle}</p>
          </div>

          <button className="bg-black/90 text-white px-3 py-1.5 sm:px-4 rounded-full text-xs sm:text-sm shadow">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
