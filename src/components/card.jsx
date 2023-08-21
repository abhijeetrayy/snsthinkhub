import Link from "next/link";
import ClickButton from "./moreButton";
import javaCourseImg from "../public/photos/javaCourse.png"
import React from "react";
import Image from "next/image";

export default function card() {
  return (
    <>
      <div className="w-full  flex items-center flex-col ">
        <div className="h-fit w-full  py-7 max-w-6xl ">
          <div className="flex flex-col items-center mb-6 bg-white px-8 py-3 bg-cover">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-5 float-left  text-indigo-500">
              Our Courses
            </h2>
            <p className="sm:text-base flex text-center text-xs">
              Exclusive, personalized and latest programs for you to sharpen
              your skills.
              {/* Our Courses are Indurties expret fit, which{" "}
              <span className="text-white">make our student</span> reach
              their{" "}
              <span className="text-white">potential and career</span>. */}
            </p>
          </div>
          <div className="w-full flex justify-center">
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 ">
              <div className="max-w-[300px] flex flex-col bg-indigo-500 p-4 rounded-xl shadow-lg transform md:hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-base font-bold text-white">
                  Beginner Friendly
                </h3>
                <div className="relative">
                  <Image
                    width={200}
                    height={100}
                    className="w-full rounded-xl"
                    src={javaCourseImg}
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-gray-800 text-gray-100 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    Enroll
                  </p>
                </div>
                <Link
                  href={"/home/courses/java-fullstack-2023"}
                  className="mt-4 text-white text-xl font-bold cursor-pointer"
                >
                  Java Full Stack - Complete Course
                </Link>
                <div className="mt-4 text-sm text-white flex flex-col gap-1">
                  <div className="flex space-x-1 items-center ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
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
                    <p>80 Hours</p>
                  </div>
                  <div className="flex space-x-1 items-center ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
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
                    <p>15 Lesson's</p>
                  </div>
                  <div className="flex space-x-1 items-center ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
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
                    <p>Java</p>
                  </div>
                </div>
                <div className="flex-grow">{""}</div>
                <div>
                  <Link href={"/home/courses/java-fullstack-2023"}>
                    <ClickButton
                      style={
                        "mt-4 text-sm hover:bg-gray-100 duration-300 w-full text-gray-700 bg-white  py-2 rounded-lg shadow-lg"
                      }
                      data={"Buy Lesson"}
                    />
                  </Link>
                </div>
              </div>

              <div className="max-w-[300px] flex flex-col bg-indigo-500 p-4 rounded-xl shadow-lg transform md:hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-base font-bold text-white">
                  Intermediate
                </h3>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-gray-800 text-gray-100 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    Enroll
                  </p>
                  {/* <p className="absolute top-0 right-0 bg-gray-800 text-gray-100 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
                    %20 Discount
                  </p> */}
                </div>
                <Link
                  href={""}
                  className="mt-4 text-white text-xl font-bold cursor-pointer"
                >
                  Introduction to Data Structure
                </Link>
                <div className="text-sm mt-4 flex flex-col gap-1 text-white">
                  <div className="flex space-x-1 items-center ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
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
                    <p>120 Hours</p>
                  </div>
                  <div className="flex space-x-1 items-center ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
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
                  <div className="flex space-x-1 items-center  ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
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
                    <p>Java / C++</p>
                  </div>
                </div>
                <div className="flex-grow">{""}</div>
                <div className="">
                  <Link href={""} className="">
                    <ClickButton
                      style={
                        "mt-4 text-sm hover:bg-gray-100 duration-300 w-full text-gray-700 bg-white py-2 rounded-lg shadow-lg"
                      }
                      data={"Coming Soon ..."}
                    />
                  </Link>
                </div>
              </div>

              <div className="max-w-[300px] flex flex-col bg-indigo-500 p-4 rounded-xl shadow-lg transform md:hover:scale-105 transition duration-500">
                <h3 className="mb-3 text-base font-bold text-white">
                  Beginner Friendly
                </h3>
                <div className="relative">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-gray-800 text-gray-100 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    Enroll
                  </p>
                </div>
                <Link
                  href={""}
                  className="mt-4 text-white text-xl font-bold cursor-pointer"
                >
                  Verbal Ability - Interview and Public speaking
                </Link>
                <div className="text-sm mt-4 flex flex-col gap-1 text-white">
                  <div className="flex space-x-1 items-center ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
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
                    <p>30 Hours</p>
                  </div>
                  <div className="flex space-x-1 items-center ">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
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
                        className="h-4 w-4 text-white"
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
                    <p>Soft Skills</p>
                  </div>
                </div>
                <div className="flex-grow">{""}</div>
                <div>
                  <Link href={""}>
                    <ClickButton
                      style={
                        "mt-4 text-sm hover:bg-gray-100 duration-300 w-full text-gray-700 bg-white text-gray-100 py-2 rounded-lg shadow-lg"
                      }
                      data={"Coming Soon ..."}
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
