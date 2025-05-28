import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(0, 0, 0, 0.9)",
      }}
      className="p-5 font-sans   w-full "
    >
      <div className="w-full bg-[rgba(0, 0, 0, 0.9)] rounded-[10]">
        <div className="flex justify-center text-center ">
          <h1 className="text-[20px] sm:text-[35px] font-bold text-white">
            Making car rentals easy, affordable, and accessible.
          </h1>
        </div>

        <div className="p-3">
          <h2 className="font-bold mt-2 text-[18px] sm:text-[30px]">
            📖 Company Introduction
          </h2>
          <p className="mt-3 text-white font-bold">
            Founded in 2015, DriveNow Rentals has been helping customers across
            12+ cities find the perfect vehicle for any occasion. Whether it’s a
            weekend trip or a business journey, we’ve got the right car for you.
          </p>
        </div>
      </div>
      <div className=" mt-5 p-3 rounded-[10]">
        <h1 className="font-bold text-[18px] sm:text-[30px]">🎯Our Mission</h1>
        <p className="mt-2 text-white font-bold">
          To make car rentals simple, transparent, and accessible — so every
          trip starts and ends smoothly.
        </p>
      </div>
      <div className=" mt-5 p-3 rounded-[10] text-white font-bold">
        <h1 className="font-bold text-[18px] sm:text-[30px] text-black">
          🚗 Why Choose Us?
        </h1>
        <p className="mt-2 ">✅ Competitive pricing with no hidden fees</p>
        <p>✅ 24/7 customer support</p>
        <p>✅ Wide range of vehicles economy, SUV, luxury</p>
        <p>✅ Easy booking, pickup & return</p>
        <p>✅ Fully insured and safety-checked fleet</p>
      </div>
    </div>
  );
};

export default About;
