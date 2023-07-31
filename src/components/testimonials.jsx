import React from "react";
import TestimonialsData from "../json_data/testimonials";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center p-3">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="text-sm font-bold tracking-wider text-indigo-600 uppercase leading-10">
            Testimonials
          </p>
        </div>
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-700 ">
          Here's what our Student says
        </h2>
      </div>
      <div className="overflow-x-scroll flex  sm:block w-full gap-3  sm:overflow-auto   sm:columns-2 md:columns-3 lg:columns-4 px-2 md:px-5 max-w-7xl">
        {TestimonialsData.map((items, index) => (
          <div
            key={index}
            className="relative  sm:border-2 border-gray-100 mb-5 rounded-lg break-inside-avoid sm:shadow-md md:shadow-lg sm:hover:shadow-xl"
          >
            <div className="p-5 relative  flex flex-col gap-1 border-2 border-gray-100 sm:border-0 shadow-lg sm:shadow-none">
              <div className="flex flex-col mb-3 ">
                <h1 className="test__title text-xl text-indigo-500 font-bold">
                  {items.name}
                </h1>
                <span className="text-gray-500 text-xs font-normal">
                  {/* DSA Placement Program */}
                </span>
                <span className="text-sm">Raiting: ⭐⭐⭐⭐⭐</span>
              </div>
              <p className=" w-56 sm:w-auto test__author text-sm font-normal text-gray-700">
                {items.data}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
