import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full flex flex-col items-center text-center 
      p-8 sm:p-12 md:p-20 bg-gray-100"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
        Your Selection, Simplified
      </h1>

      <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl mb-6">
        "Where quality meets style - your trusted brand store."
      </p>
    </section>
  );
};

export default Hero;
