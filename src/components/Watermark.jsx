import React from "react";
import "./Component.css";

const Watermark = () => {
  return (
    <div className="container font-daysone text-7xl flex justify-around flex-wrap gap-y-3 lg:mt-0  mt-[10rem]">
      <h1 className="text-accent">Sweet</h1>
      <h1 className="bites relative">Bites</h1>
      <h1 className="text-transparent haven border-black border-b pb-1">Haven</h1>
    </div>
  );
};

export default Watermark;
