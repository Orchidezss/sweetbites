import React from "react";
import display from "../assets/cupcake-display.png";

const Display = () => {
  return (
    <div className="container mt-[20px] md:mt-0 min-h-screen flex py-[10%] font-script md:flex-row flex-col text-center">
      <h1 className="text-5xl self-start md:border-b border-black py-3 w-full md:text-start border-b ">Where Everty Bite</h1>
      <img src={display} alt="" className='display h-fit m-auto py-3'/>
      <h1 className="text-5xl self-end w-full md:border-t border-t border-black py-3 md:text-end">Tells a Sweet Story</h1>
    </div>
  );
};

export default Display;
