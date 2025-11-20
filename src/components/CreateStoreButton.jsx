import React from "react";
import logoselectvia from '../assets/logoselectvia.webp';

const CreateStoreButton = () => {
  return (
    <div className="w-full flex flex-col items-center mt-8 fixed bottom-4 pb-4 sm:mt-10 sm:bottom-6 sm:pb-6">

      {/* Main BuTton */}
      <button className="flex items-center gap-2 bg-white shadow-lg px-4 py-2 rounded-full sm:gap-3 sm:px-6 sm:py-3">
        
        {/* icon */}
        <div className="text-black text-xl sm:text-2xl">
          <img src={logoselectvia} alt="Selectvia Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        {/* Text */}
        <span className="text-black font-medium text-sm sm:text-base">Create Your</span>

        {/* Orangee Tag */}
        <span className="bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-medium sm:px-4 sm:py-1 sm:text-sm">
          Store-in-Bio
        </span>

      </button>

      {/* Bottom Text */}
      <p className="mt-2 text-gray-600 text-xs sm:mt-3 sm:text-sm">
        with <span className="font-semibold text-black-200">Selectvia</span>
      </p>
    </div>
  );
};

export default CreateStoreButton;
