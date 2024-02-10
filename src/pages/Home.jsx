import React from "react";
import NonStateCorner from "./NonStateCorner";
import HeroSection from "../component/HeroSection";
import AboutUsComponent from "../component/AboutUsComponent";

const Home = () => {

  return (
    <div className="w-full">
        <HeroSection />
        <AboutUsComponent />
        <hr className="py-10 pt-20 w-4/6 m-auto" />
        <NonStateCorner />
    </div>
  );
};

export default Home;
