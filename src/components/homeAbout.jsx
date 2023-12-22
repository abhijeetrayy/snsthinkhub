"use client";
import React from "react";
import aboutImg from "../public/photos/groupMam.jpg";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

function homeAbout() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-center overflow-x-clip my-20 p-5 gap-20 md:gap-5">
        <div className="flex flex-col gap-6 overflow-visible md:w-[50%]">
          <div className=" text-gray-600 text-3xl md:text-5xl font-bold">
            Every Thing Student Needs - SandSthinkhub
          </div>
          <div className="flex flex-col gap-4 text-indigo-500   ">
            <Link
              href={"/home/courses"}
              className="flex flex-row gap-3 hover:pl-2 duration-200 cursor-pointer"
            >
              <BsArrowRightCircleFill />
              Courses
            </Link>
            <Link
              href={"/home/internship"}
              className="flex flex-row gap-3 hover:pl-2 duration-200 cursor-pointer"
            >
              {" "}
              <BsArrowRightCircleFill /> Internship
            </Link>
            <Link
              href={"/home/program"}
              className="flex flex-row gap-3 hover:pl-2 duration-200 cursor-pointer"
            >
              {" "}
              <BsArrowRightCircleFill /> Counseling
            </Link>
            <Link
              href={"/home/program"}
              className="flex flex-row gap-3 hover:pl-2 duration-200 cursor-pointer"
            >
              {" "}
              <BsArrowRightCircleFill /> Career Guidance
            </Link>
            <Link
              href={"/home/program"}
              className="flex flex-row gap-3 hover:pl-2 duration-200 cursor-pointer"
            >
              {" "}
              <BsArrowRightCircleFill /> Placement
            </Link>
          </div>
        </div>
        <div className=" bg-clip-border w-fit">
          <Image
            className="z-10 rotate-6 scale-110 md:border-8 md:border-indigo-500 md:rounded-lg "
            width={400}
            height={400}
            src={aboutImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default homeAbout;
