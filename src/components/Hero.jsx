import React from "react";
import heroimg from "../assets/hero.svg";

const Hero = () => {

  return (
    <div className="container pt-[65px] md:grid md:grid-cols-2 min-h-screen flex flex-col" id="home">
      <div className="md:h-full md:flex md:items-center">
        <img src={heroimg} alt="" className="hero-image"/>
      </div>
      <div className="md:flex md:flex-col md:justify-around md:text-end">
        <h1 className="text-5xl font-script">"Indulge in Sweetness, One Bite at a Time!"</h1>
        <div className="pt-3 md:border-t md:border-black">
          <p>
            "Delight in cupcakes crafted to perfection—pure bliss in every bite,
            made with love and premium ingredients. Beautiful, delicious,
            unforgettable."
          </p>
          <button className="py-4 px-9 hero-button text-white mt-4">Treat Yourself Today!</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
