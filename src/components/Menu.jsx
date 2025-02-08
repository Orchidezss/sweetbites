import React from "react";
import original from '../assets/cupcake-price1.png'
import strawberry from '../assets/cupcake-price2.png'
import './Component.css'

const Menu = () => {
  return (
    <div className="container mt-[100px]" id="menu">
      <h1 className="font-script text-5xl font-bold text-center w-1/2 mx-auto py-3 border-black border-b">Signature Flavors</h1>
      <div className="grid md:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0 gap-y-20 lg:mt-0 mt-3 lg:py-32">
        <div className="bg-secondary relative pb-10 pt-16 px-5 min-h-64 mt-[220px] lg:w-[70%] w-full lg:text-start text-center lg:py-10 lg:mx-0 lg:mt-0">
            <h1 className="absolute -bottom-5 text-5xl font-script left-1/2 -translate-x-1/2 lg:left-3 lg:translate-x-0 lg:-top-8">Original</h1>
            <h2 className="relative z-2 font-daysone text-accent text-3xl lg:mt-0 mt-3">$15.0</h2>
            <p className="relative z-2 lg:w-[50%]">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..</p>
            <button className="relative z-2 button text-white w-1/2 py-2 mt-3">Grab Yours</button>
            <img src={original} alt="" className="absolute -top-[220px] left-1/2 -translate-x-1/2 lg:left-[105%] lg:-top-[50px] lg:h-[130%]"/>
        </div>
        <div className="bg-secondary relative pb-10 pt-16 px-5 min-h-64 mt-[220px] lg:w-[70%] w-full lg:text-start text-center lg:py-10 lg:mx-0 lg:mt-0">
            <h1 className="absolute -bottom-5 text-5xl font-script left-1/2 -translate-x-1/2 lg:left-3 lg:translate-x-0 lg:-top-8">Strawberry</h1>
            <h2 className="relative z-2 font-daysone text-accent text-3xl lg:mt-0 mt-3">$15.0</h2>
            <p className="relative z-2 lg:w-[50%]">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..</p>
            <button className="relative z-2 button text-white w-1/2 py-2 mt-3">Grab Yours</button>
            <img src={strawberry} alt="" className="absolute -top-[220px] left-1/2 -translate-x-1/2 lg:left-[105%] lg:-top-[50px] lg:h-[130%]"/>
        </div>
      </div>
    </div>
  );
};

export default Menu;
