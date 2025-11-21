import React from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import BrandCard from "./components/Brandcard";
import HorizontalScroll from "./components/HorizontalScroll";
import Qualityproduct from "./components/Qualityproduct";
import CreateStoreButton from "./components/CreateStoreButton";

const App = () => {
  return (
    <>
      <BrandCard />
      <Navbar />
      <Features />
      <HorizontalScroll />
      <Qualityproduct />
      <CreateStoreButton /> 
    </>
  );
};

export default App;
