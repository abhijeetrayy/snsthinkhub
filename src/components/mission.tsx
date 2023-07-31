'use client'
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

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://media.istockphoto.com/id/477633485/photo/team-of-successful-university-graduates-raising-their-convocation-caps.jpg?s=612x612&w=0&k=20&c=Cg9aAKKOFJkukureA3hzdnXin42O-GCBP60b4h5CLic=',
    },
    {
      url: 'https://media.istockphoto.com/id/1359662582/photo/group-of-happy-college-student-stock-photo.jpg?s=612x612&w=0&k=20&c=Oq4d6V5XJi9LayES7cH6n2obZWqVuzJOq2CtSBSiP6g=',
    },
    {
      url: 'https://media.istockphoto.com/id/1143250095/photo/group-of-happy-friends-using-smartphones-for-taking-photos-and-watching-videos-teenagers.jpg?s=612x612&w=0&k=20&c=iMJyps43y2faXp889i5S60NZS1S3KDz7ue3gGqUfhhM=',
    },

    {
      url: 'https://media.istockphoto.com/id/987130494/photo/group-of-students-joking-and-getting-to-know-each-other.jpg?s=612x612&w=0&k=20&c=xzBrI0krhgttDdaAAwvh6mPYLHjiP_vfF7CPvBTAqvo=',
    },
    {
      url: 'https://media.istockphoto.com/id/1028286416/photo/group-of-people-jumping-on-the-park-at-dusk-stock-image.jpg?s=612x612&w=0&k=20&c=yPuVL8HBdFtG-gGUJ9UAqHPJ6DYurllQWoeelsPFbkc=',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='flex  justify-center'>
      <div className='max-w-6xl p-3 flex flex-col md:flex-row items-center'>

        <div className='h-[500px] w-full m-auto py-16 px-4 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled className='text-indigo-600' />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center py-6 ">
          <div className="flex flex-col mx-3  max-w-[990px] items-stretch gap-5 rounded-md p-5 md:py-9">
            <div className=" flex-1 ">
              <div>
                <h2 className="text-3xl">Mission</h2>
                <p className="text-sm text-gray-600">
                  It is our mission to aid that wave of transformation by making
                  quality education of all levels more accessible to every
                  youngster, in every corner of our country. We are working today,
                  for the India of tomorrow.
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
                  We aspire to create a platform where quality education is not a
                  privilege but a right everyone deserves. And to aid an entire
                  generation of youngsters in manifesting their current dreams into
                  their inevitable reality.
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
