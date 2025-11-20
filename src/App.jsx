import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import BrandCard from "./components/Brandcard";
import HorizontalScroll from "./components/HorizontalScroll";
import Qualityproduct from "./components/Qualityproduct";
import CreateStoreButton from "./components/CreateStoreButton";

const App = () => {
  return (
    <>
      <BrandCard />
      <Navbar />
      <Hero />
      <Features />
      <HorizontalScroll />
      <Qualityproduct />
      <CreateStoreButton /> 
      <Footer />
    </>
  );
};

export default App;
