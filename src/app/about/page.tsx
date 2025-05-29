import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <Image
          src={"/images/about-image.png"}
          alt="imaegs"
          width={3000}
          height={1000}
          className="w-full h-[40vh] lg:h-[80vh] md:h-[50vh] sm:h-[50vh]"
        />
      </div>

      <div className="lg:px-20 md:px-10 sm:px-5  p-5 ">
        <div>
          <h2 className="font-bold mt-2 text-[18px] sm:text-[30px]">
            Company Introduction
          </h2>
          <p className="mt-2  ">
            Founded in 2015, DriveNow Rentals has been helping customers across
            12+ cities find the perfect vehicle for any occasion. Whether it is a
            weekend trip or a business journey, we have got the right car for you.
          </p>
        </div>
        <div className=" mt-5  rounded-[10]  ">
          <h1 className="font-bold text-[18px] sm:text-[30px]">About Us</h1>
          <p className="mt-2 ">
            Part of CarTrade Tech, CarWales mission is to bring delight in car
            buying, we offer a bouquet of reliable tools and services to help
            car consumers decide on buying the right car, at the right price and
            from the right partner.
          </p>
        </div>
      </div>
      <div className="sm:px-20 sm:p-5">
        <div className="grid sm:grid-cols-2  items-center justify-center text-center gap-2 p-3  ">
          <div className="p-5 bg-amber-100">
            <h1>RESPECT</h1>
            <p>We respect our colleagues, customers and partners</p>
          </div>
          <div className="p-5 bg-blue-200">
            <h1>AGILITY</h1>
            <p>We are extremely open-minded and adaptable</p>
          </div>
          <div className="p-5 bg-blue-200">
            <h1>OWNERSHIP</h1>
            <p>We take ownership of results</p>
          </div>
          <div className="p-5 bg-amber-100">
            <h1>WE BEFORE I</h1>
            <p>We always put our company ahead of ourselves</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
