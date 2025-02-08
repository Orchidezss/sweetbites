import React from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <div className="mt-[50px] container flex lg:gap-x-10 lg:flex-row flex-col" id="about">
      <img src={about} alt="" className="h-fit"/>
      <div>
        <h1 className="text-5xl font-script font-bold py-3 mb-3 border-b border-black w-1/2">About Us</h1>
        <p>At SweetBites Haven, baking isn’t just a craft—it’s our passion. We started this journey to spread joy through sweet creations that delight the senses. Every cupcake, cake, and dessert we make is lovingly handcrafted with premium ingredients, ensuring every bite is as memorable as the last.</p>
        <p className="mt-2">Our mission is simple: to bring happiness to every occasion, big or small. Whether you’re celebrating a birthday, wedding, or just craving something special, we’re here to make life sweeter—one treat at a time.</p>
        <p className="mt-2">Join us in celebrating the art of baking and indulge in desserts that taste as good as they look. Your satisfaction is our greatest reward!
        Would you like specific details tailored to your story or business? Let me know!</p>
      </div>
    </div>
  );
};

export default About;
