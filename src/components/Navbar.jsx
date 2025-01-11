import React, { useState } from "react";
import menu from "../assets/menu.svg";
import "./Component.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-screen h-[65px] bg-primary fixed top-0 z-50">
        <div className="container w-full h-full flex justify-between items-center border-b border-black">
          <p className="m-0 font-daysone text-xl">SweetBites Haven</p>
          <ul className="hidden gap-5 lg:flex h-full lg:items-center">
            <li className="hover:border-b border-black">
              <a href="">Home</a>
            </li>
            <li className="hover:border-b border-black">
              <a href="">About Us</a>
            </li>
            <li className="hover:border-b border-black">
              <a href="">Signature Flavors</a>
            </li>
            <li className="hover:border-b border-black">
              <a href="">Reviews</a>
            </li>
            <li className="hover:border-b border-black">
              <a href="">Contact Us</a>
            </li>
          </ul>
          <button className="border border-black py-2 px-5 hidden lg:block transition hover:bg-black hover:text-primary">
            Custom Order
          </button>
          <img src={menu} alt="" className="lg:hidden" onClick={toggleNavbar} />
        </div>
      </nav>

      {/* Navbar Mobile Toggled */}
      <nav
        className={`w-[70vw] nav-mobile -z-50 bg-primary border-r border-black fixed top-[65px] lg:hidden transition-all duration-500 ${
          isOpen ? "z-50 opacity-100 left-0" : "opacity-0  -left-[70vw]"
        }`}
      >
        <ul className="flex flex-col px-[10%] justify-around h-full md:text-xl">
          <li className="border-b border-black pb-1">
            <a href="">Home</a>
          </li>
          <li className="border-b border-black pb-1">
            <a href="">About Us</a>
          </li>
          <li className="border-b border-black pb-1">
            <a href="">Signature Flavors</a>
          </li>
          <li className="border-b border-black pb-1">
            <a href="">Reviews</a>
          </li>
          <li className="border-b border-black pb-1">
            <a href="">Contact Us</a>
          </li>
          <li>
            <button className="border border-black py-2 px-5 hover:bg-black hover:text-primary">
              Custom Order
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
