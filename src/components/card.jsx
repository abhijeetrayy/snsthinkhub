import Link from "next/link";
import ClickButton from "./moreButton";

import React from "react";

export default function card() {
  return (
    <>
      <div className="w-full  flex items-center flex-col ">
        <div className="h-fit w-full  py-7 max-w-6xl ">
          <div className="flex flex-col items-center mb-6 bg-white px-8 py-3 bg-cover">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-5 float-left  text-indigo-500">
              Our Courses
            </h2>
            <p className="text-base">
              Exclusive, personalized and latest programs for you to sharpen
              your skills.
              {/* Our Courses are Indurties expret fit, which{" "}
              <span className="text-indigo-600">make our student</span> reach
              their{" "}
              <span className="text-indigo-600">potential and career</span>. */}
            </p>
          </div>
          <div className="w-full flex justify-center">
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 ">
              <div className="max-w-[300px] flex flex-col bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-base font-bold text-indigo-600">
                  Beginner Friendly
                </h3>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    FREE
                  </p>
                </div>
                <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">
                  Javascript Bootcamp for Absolute Beginners
                </h1>
                <div className="mt-4 text-sm">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p>3 Parts</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </span>
                    <p>Vanilla JS</p>
                  </div>
                </div>
                <div className="flex-grow">{""}</div>
                <div>
                  <Link href={"/home/courses/hello"}>
                    <ClickButton
                      style={
                        "mt-4 text-lg w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"
                      }
                      data={"Buy Lesson"}
                    />
                  </Link>
                </div>
              </div>

              <div className="max-w-[300px] flex flex-col bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-base font-bold text-indigo-600">
                  Intermediate
                </h3>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    $12
                  </p>
                  <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
                    %20 Discount
                  </p>
                </div>
                <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">
                  Write a Gatsby plugin using Typescript
                </h1>
                <div className="text-sm mt-4 ">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p>3 Parts</p>
                  </div>
                  <div className="flex space-x-1 items-center ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </span>
                    <p>TypeScript</p>
                  </div>
                </div>
                <div className="flex-grow">{""}</div>
                <div className="">
                  <Link href={"/home/courses/WebDevelopment"}>
                    <ClickButton
                      style={
                        "mt-4 text-lg w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"
                      }
                      data={"Start Watching Now"}
                    />
                  </Link>
                </div>
              </div>

              <div className="max-w-[300px] flex flex-col bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-base font-bold text-indigo-600">
                  Beginner Friendly
                </h3>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    $50
                  </p>
                </div>
                <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">
                  Advanced React Native for Sustainability
                </h1>
                <div className="text-sm mt-4">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p>1:34:23 Minutes</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p>3 Parts</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </span>
                    <p>Vanilla JS</p>
                  </div>
                </div>
                <div className="flex-grow">{""}</div>
                <div>
                  <Link href={"/home/courses/WebDevelopment"}>
                    <ClickButton
                      style={
                        "mt-4 text-lg w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"
                      }
                      data={"Buy Lesson"}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
