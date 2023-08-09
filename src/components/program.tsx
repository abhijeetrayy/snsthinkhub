"use client";
import React, { useRef, useState, useEffect } from "react";
import Workwith from "./workedwith";
import Features from "./features";
import ContactUs from "./contactus";
import ProgramAnimation from "./programAnimation";
import HeaderImg from "../public/photos/trianer_university.png";
import Marquee from "react-double-marquee";
import Image from "next/image";
import "../css/patternProgram.css";
import "../css/background.css";
import ProgramBuy from "./priceCardsm";
import Testimonials from "./testimonials";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
const data = [
  {
    title: "Technical Course",
    detail:
      "We're looking for experinced Technical teacher with required technical knowdlege",
    tag: "freelance",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nihil explicabo minima ipsum culpa molestias?",
  },
];

function program() {
  const [filtered, setfiltered] = useState(data);
  const [isAnimating, setIsAnimating] = useState(false);
  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);
  const [border3, setBorder3] = useState(false);

  useEffect(() => {
    setIsAnimating(!isAnimating);
    const clear = setTimeout(() => {
      setIsAnimating(false);
      setBorder1(true);
    }, 300);
    return () => {
      clearInterval(clear);
    };
  }, []);

  function changeAgain() {
    setIsAnimating(!isAnimating);
    const clear = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => {
      clearInterval(clear);
    };
  }
  function result(tags: string) {
    const newArray = data.filter((obj) => obj.tag == tags);
    console.log(newArray);

    setfiltered(newArray);

    return changeAgain();
  }
  const ref: any = useRef(null);
  const contactRef: any = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const borderOne = () => {
    setBorder2(false);
    setBorder3(false);
    setBorder1(true);
  };
  const borderTwo = () => {
    setBorder1(false);
    setBorder2(true);
    setBorder3(false);
  };
  const borderThree = () => {
    setBorder1(false);
    setBorder2(false);
    setBorder3(true);
  };
  return (
    <div className="block md:flex flex-col items-center justify-center">
      <div className="max-w-[1100px] flex flex-col gap-10">
        <div className="relative flex flex-col justify-center items-center min-h-[450px] ">
          <div className="magicpattern absolute h-full w-full top-0 left-0 right-0 bottom-0">
            {/* <Image
              className="w-full h-full object-cover"
              width={500}
              height={100}
              src={HeaderImg}
              alt=""
            /> */}
          </div>
          <div className=" z-10 w-full flex flex-col gap-5 items-center justify-center">
            <div className="flex items-center flex-col">
              <h1 className="z-10 text-6xl font-bold text-gray-800">
                One Membership
              </h1>
              <div
                className="z-10 p-2 flex-wrap bg-gray-800 text-white rounded-xl text-[1.9rem] w-64 md:w-[400px]  bg-cover object-cover scrollbar-none "
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                <Marquee
                  style={{ overflow: "hidden" }}
                  delay={0}
                  className="text-5xl"
                >
                  360 needed solution
                </Marquee>
              </div>
            </div>
            <div className="z-10 w-full">
              <p className="p-3 bg-white shadow-xl rounded-lg float-right w-96 text-sm  hover:rotate-3 rotate-0 duration-500 cursor-pointer">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                sapiente, quia sequi magnam harum voluptate.
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <button
                onClick={handleClick}
                className="z-10 py-1 px-3 text-md text-white bg-indigo-600 border-2 border-indigo-600 hover:border-indigo-500 rounded-lg hover:text-white  hover:bg-indigo-500  duration-300 "
              >
                Program's
              </button>
              <button
                onClick={handleClickContact}
                className="z-10 py-1 px-3 text-md hover:text-indigo-500 border-2 hover:border-indigo-600 rounded-lg border-gray-800 text-gray-900  duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="px-3 mt-5">
          <div className="text-xs">trusted with top universities.</div>
          <div className="pt-3">
            <Workwith />
          </div>
        </div>

        <div ref={ref}>
          <div className="">
            <div className="mb-10 w-full flex justify-center ">
              <div className="flex flex-col justify-center items-center">
                <h2 className="mb-4 mt-6 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-700 ">
                  Campus Program's
                </h2>
                <p className="text-gray-600 sm:text-sm ">
                  What your student needs
                </p>
              </div>
            </div>
            <div className=" flex flex-row   gap-10   justify-around max-w-5xl h-full">
              <div className="w-1/3 ">
                <div className="flex flex-col gap-3  h-full">
                  <div
                    onClick={() => {
                      result("freelance");
                      borderOne();
                    }}
                    className={`flex-1 rounded-lg cursor-pointer shadow-md hover:scale-105 duration-300 border p-3 ${
                      border1 ? "border-2 border-indigo-400" : "border-2"
                    }`}
                  >
                    <div className="flex gap-3 flex-col">
                      <h1>DSA Courses</h1>
                      <p className="text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. A nihil explicabo minima ipsum culpa molestias?
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      result("freelance");
                      borderTwo();
                    }}
                    className={`flex-1 rounded-lg cursor-pointer shadow-md hover:scale-105 duration-300 border p-3 ${
                      border2 ? "border-2 border-indigo-400" : "border-2"
                    }`}
                  >
                    <div className="flex gap-3 flex-col">
                      <h1>Interview Prepration</h1>
                      <p className="text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. A nihil explicabo minima ipsum culpa molestias?
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      result("freelance");
                      borderThree();
                    }}
                    className={`flex-1 rounded-lg cursor-pointer shadow-md hover:scale-105 duration-300 border p-3 ${
                      border3 ? "border-2 border-indigo-400" : "border-2"
                    }`}
                  >
                    <div className="flex gap-3 flex-col">
                      <h1>Career Counseling</h1>
                      <p className="text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. A nihil explicabo minima ipsum culpa molestias?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={` flex  flex-col gap-4 ${
                  isAnimating ? "fade-in" : ""
                }`}
              >
                {filtered.map((item, index) => (
                  <div key={index} className=" flex flex-col gap-8 w-full ">
                    <div className="w-full flex flex-col gap-5 justify-center items-start">
                      <div className="w-full  ">
                        <Image
                          className="w-full h-56 object-cover rounded-md"
                          src={HeaderImg}
                          width={500}
                          height={100}
                          alt=""
                        />
                      </div>
                      <div className="flex  flex-col gap-3">
                        <h1 className=" text-5xl text-indigo-500 font-bold">
                          {item.title}
                        </h1>
                        <p className="text-gray-700 text-sm">{item.detail}</p>
                        <div>
                          <ul>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                          </ul>
                        </div>
                      </div>

                      {/* <div className="">
                        <Link
                          href={"/home/career/decription"}
                          className="text-lg flex flex-row items-center  transform duration-300"
                        >
                          Apply <BiRightArrowAlt />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Testimonials />
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col  md:items-center md:text-center  mb-8 lg:mb-16">
            <div className="max-w-6xl">
              <hr className="border" />
              <h2 className="mb-4 mt-6 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-700 ">
                Campus Program's
              </h2>
              <p className="text-gray-600 sm:text-sm ">
                What makes S&S different ?
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full gap-4 my-7">
            <ProgramBuy />
            <ProgramBuy />
            <ProgramBuy />
          </div>
        </div>
        <div>
          <div ref={contactRef}>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default program;
