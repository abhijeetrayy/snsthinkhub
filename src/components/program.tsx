"use client";
import React, { useRef, useState, useEffect } from "react";
import Workwith from "./workedwith";
import Features from "./features";
import ContactUs from "./contactus";
import ProgramAnimation from "./programAnimation";
import HeaderImg from "../public/photos/ceritficate_group.png";
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
      <div className="w-full flex lg:items-center flex-col gap-10">
        <div className="relative flex flex-col justify-center items-center xl:w-[1124px] min-h-[450px] ">
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
            <div className="flex items-center flex-col gap-3">
              <h1 className="z-10 text-5xl sm:text-6xl font-bold text-gray-800 text-center">
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
              <p className="p-3 w-full bg-white shadow-xl rounded-lg sm:w-96 text-sm float-right hover:rotate-3 rotate-0 duration-500 cursor-pointer">
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

        <div className="w-full">
          <div className="w-full flex justify-center ">
            <div className="flex flex-row justify-evenly items-center max-w-5xl w-full bg-gradient-to-r from-indigo-200 to-indigo-50  border-2 rounded-xl p-4 h-36">
              <div className="flex items-center flex-col gap-4">
                <span className="font-bold text-md">6+ year</span>
                <span className="text-xs">of Experience</span>
              </div>

              <div className="flex items-center flex-col gap-4">
                <span className="font-bold text-md">5000+</span>
                <span className="text-xs">Students</span>
              </div>
              <div className="flex items-center flex-col gap-4">
                <span className="font-bold text-md">15+</span>
                <span className="text-xs">Avg CTC</span>
              </div>
              <div className="flex items-center flex-col gap-4">
                <span className="font-bold text-md">10+</span>
                <span className="text-xs">Universities</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 mt-5">
          <div className="text-xs">trusted with top universities.</div>
          <div className="pt-3">
            <Workwith />
          </div>
        </div>
        <div ref={ref} className="lg:flex lg:w-full justify-center p-3">
          <div className=" lg:max-w-6xl lg:flex flex-col justify-center items-center">
            <div className=" w-full flex justify-center my-5">
              <div className="flex flex-col justify-center items-center">
                <h2 className="mb-4  text-2xl md:text-4xl tracking-tight font-extrabold text-gray-700 ">
                  Campus Program's
                </h2>
                <p className="text-gray-600 sm:text-sm ">
                  What your student needs
                </p>
              </div>
            </div>
            <div className="md:grid md:grid-cols-3  gap-5  justify-evenly max-w-5xl h-full">
              <div className=" md:col-span-1 md:w-full mb-5 md:mb-0 ">
                <div className="flex md:flex-col gap-3 md:h-full overflow-x-scroll md:overflow-visible scrollbar-none">
                  <div
                    onClick={() => {
                      result("freelance");
                      borderOne();
                    }}
                    className={`flex-1 rounded-lg cursor-pointer w-56 md:w-auto shadow-md md:hover:scale-105 duration-300 border p-3 ${
                      border1 ? "border-2 border-indigo-400" : "border-2"
                    }`}
                  >
                    <div className="flex gap-3 w-56 md:w-auto flex-col">
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
                    className={`flex-1 rounded-lg cursor-pointer w-56 md:w-auto shadow-md md:hover:scale-105 duration-300 border p-3 ${
                      border2 ? "border-2 border-indigo-400" : "border-2"
                    }`}
                  >
                    <div className="flex gap-3 w-56 md:w-auto flex-col">
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
                    className={`flex-1 rounded-lg cursor-pointer w-56 md:w-auto shadow-md md:hover:scale-105 duration-300 border p-3 ${
                      border3 ? "border-2 border-indigo-400" : "border-2"
                    }`}
                  >
                    <div className="flex gap-3 w-56 md:w-auto flex-col">
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
                className={`col-span-2  flex  flex-col gap-4 ${
                  isAnimating ? "fade-in" : ""
                }`}
              >
                {filtered.map((item, index) => (
                  <div key={index} className=" flex flex-col gap-8 w-full ">
                    <div className="w-full flex flex-col gap-5 justify-center items-start">
                      <div className="w-full">
                        <Image
                          className="w-full h-56 object-cover rounded-md"
                          src={HeaderImg}
                          width={230}
                          height={100}
                          quality={80}
                          placeholder="blur"
                          alt=""
                        />
                      </div>
                      <div className="flex  flex-col gap-3">
                        <h1 className=" text-2xl text-gray-600 font-bold">
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
        <div className="xl:flex justify-center p-3">
          <div className="xl:max-w-6xl">
            <Testimonials />
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col  md:items-center md:text-center  mb-8 lg:mb-16 px-3">
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
          <div className="flex flex-wrap justify-center w-full gap-4 my-7">
            <ProgramBuy />
            <ProgramBuy />
            <ProgramBuy />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full" ref={contactRef}>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default program;
