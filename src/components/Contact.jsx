import React from "react";
import contact from '../assets/contact.png'

const Contact = () => {
  return (
    <div className="container mt-[10rem] ">
      <h1 className="w-1/2 mx-auto py-1 text-center text-5xl font-script font-bold border-black border-b">
        Contact Us
      </h1>
      <div>
        <div className="bg-secondary py-5 px-5 mt-16">
          <div>
            <h2 className="font-daysone text-2xl mb-2">
              Hello there! How can we make your day sweeter?
            </h2>
            <p>
              We’d love to hear from you—whether it’s about your dream cake, a
              creative idea, or just to say hi. At SweetBites Haven, we’re here
              to sprinkle a little joy into your day!{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-2 py-3">
            <div>
              <p className="">Your Name</p>
              <input
                type="text"
                placeholder="Elon Musk"
                className="w-full border p-2 focus:border-accent"
              />
            </div>
            <div>
              <p>Phone Number</p>
              <input
                type="number"
                placeholder="08XX-XXXX-XXXX"
                className="w-full border p-2 focus:border-accent"
              />
            </div>
            <div>
              <p>Email Adress</p>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full border p-2 focus:border-accent"
              />
            </div>
            <button className="text-white py-4 px-12 hero-button w-fit mt-2">
              Submit
            </button>
          </div>
        </div>
        <div className="bg-accent px-5 text-white grid sm:grid-cols-2">
          <div className="flex justify-around flex-col py-5">
            <p>
              Address: Sweet Bread Street No. 99, Beji District, Depok City,
              West Java, 16424 Indonesia
            </p>
            <p>Contact: Phone: (021) 1234-5678</p>
            <p>Email: info@sweetbiteshaven.com</p>
            <p>Thank you for visiting Sweet Bites Haven! We would love to hear from you. Whether you have a question, a special request, or simply want to say hello.</p>
          </div>
          <img src={contact} alt="" className="sm:mx-auto "/>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
