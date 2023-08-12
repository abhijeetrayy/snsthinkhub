"use client";
// import React from "react";

// function mission() {
//   return (
//     <div className="flex justify-center py-6 ">
//       <div className="flex flex-col mx-3 md:flex-row max-w-[990px] items-stretch gap-5 border rounded-md p-5 md:py-9">
//         <div className=" flex-1 text-center">
//           <div>
//             <h2 className="text-3xl">Mission</h2>
//             <p className="text-sm text-gray-600">
//               It is our mission to aid that wave of transformation by making
//               quality education of all levels more accessible to every
//               youngster, in every corner of our country. We are working today,
//               for the India of tomorrow.
//             </p>
//           </div>
//         </div>
//         <div className="border-2 border-indigo-500 rounded-md h-full m-2">
//           {""}
//         </div>
//         <div className="flex-1 text-center">
//           <div>
//             <h2 className="text-3xl">Vision</h2>
//             <p className="text-sm text-gray-600">
//               We aspire to create a platform where quality education is not a
//               privilege but a right everyone deserves. And to aid an entire
//               generation of youngsters in manifesting their current dreams into
//               their inevitable reality.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default mission;

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "../css/background.css";
import MainImg from "../public/photos/New folder/main2.png";
import group from "../public/photos/ceritficate_group.png";

import certificate from "../public/photos/uni_ceritfate.png";
import groupmain from "../public/photos/group2.png";
import Image from "next/image";
function App() {
  // const slides = [
  //   {
  //     url: groupmain,
  //   },
  //   {
  //     url: certificate,
  //   },
  //   {
  //     url: group,
  //   },

  //   {
  //     url: MainImg,
  //   },
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [haan, setHaan] = useState(false);
  // const [isLoading, setLoading] = useState(true);

  // function fading() {
  //   setHaan(!haan);
  //   const clear = setTimeout(() => {
  //     setHaan(false);
  //   }, 300);
  //   return () => clearTimeout(clear);
  // }

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  //   fading();
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  //   fading();
  // };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  //   fading();
  // };

  return (
    <div className="flex  justify-center">
      <div className="max-w-7xl w-full p-3 flex flex-col md:flex-row items-center">
        <div className="max-h-[400px] h-full w-full m-auto py-16 px-4 relative group">
          <Image
            src={groupmain}
            placeholder="blur"
            alt=""
            layout="fill"
            objectFit="cover"
            className={`
          w-full h-full rounded-2xl duration-700 ease-in-out 
              `}
          />
          {/* Left Arrow */}
          {/* <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div> */}
          {/* Right Arrow */}
          {/* <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div> */}
          {/* <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled className="text-indigo-600" />
              </div>
            ))}
          </div> */}
        </div>
        <div className="flex justify-center py-6 ">
          <div className="flex flex-col mx-3  max-w-[990px] items-stretch gap-5 rounded-md p-5 md:py-9">
            <div className=" flex-1 ">
              <div>
                <h2 className="text-3xl">Mission</h2>
                <p className="text-sm text-gray-600">
                  It is our mission to aid that wave of transformation by making
                  quality education of all levels more accessible to every
                  youngster, in every corner of our country. We are working
                  today, for the India of tomorrow.
                </p>
              </div>
            </div>
            <div className="border-2 border-indigo-500 rounded-md h-0 m-2">
              {""}
            </div>
            <div className="flex-1 ">
              <div>
                <h2 className="text-3xl">Vision</h2>
                <p className="text-sm text-gray-600">
                  We aspire to create a platform where quality education is not
                  a privilege but a right everyone deserves. And to aid an
                  entire generation of youngsters in manifesting their current
                  dreams into their inevitable reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
