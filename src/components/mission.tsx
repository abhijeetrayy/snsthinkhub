import React from "react";

function mission() {
  return (
    <div className="flex justify-center py-6 ">
      <div className="flex flex-col mx-3 md:flex-row max-w-[990px] items-stretch gap-5 border rounded-md p-5 md:py-9">
        <div className=" flex-1 text-center">
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
        <div className="border-2 border-indigo-500 rounded-md h-full m-2">
          {""}
        </div>
        <div className="flex-1 text-center">
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
  );
}

export default mission;
