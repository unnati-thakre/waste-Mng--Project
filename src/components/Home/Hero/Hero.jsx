import React from "react";
import img from "../../../assets/img/hero.jpg";

const Hero = () => {
  return (
    <div className="bg-customGreens text-white">
      <div className=" h-screen container flex flex-row items-center">
        {/* content section */}
        <div className="w-full md:w-2/4 space-y-5 mt-10">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight transition duration-300 ease-in-out transform hover:scale-105">
            Today, recycle for a better tomorrow.
          </h1>

          <p className="text-lg lg:text-2xl font-medium ">
            Sell your Scap and Earn money.....
          </p>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt totam
            perspiciatis consequuntur! Quae aliquam iste ipsam alias, optio
            consectetur officia cum totam eligendi odio at asperiores minus et,
            temporibus reiciendis.
          </p>
          <div className="flex gap-8">
            <button className="bg-customGreen py-1 px-4 rounded-md hover:scale-95 transition-150 ease-linear">
              Explore more
            </button>
            <button className="border-2  border-customGreen py-1 px-4 rounded-md hover:bg-customGreen transition duration-200 ease-linear">
              Waste Categories
            </button>
          </div>
        </div>

        {/* image Section */}
        <div className="w-full md:w-2/4 mt-4">
          <img src={img} alt="img" className="ml-4 md:ml-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
