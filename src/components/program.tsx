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
import MainImg from "../public/photos/New folder/main2.png";
import group from "../public/photos/trianer_university.png";
import interviewImg from "../public/photos/interview2.png";
import certificate from "../public/photos/uni_ceritfate.png";
import groupmain from "../public/photos/group2.png";
const data = [
  {
    title: "Professional Programs",
    detail:
      "Providing students with advanced preparation and career-focused courses.",
    tag: "course",
    image: groupmain,
    points: [
      {
        title: "Technical programs",
        details: "Expert-led workshops for B.tech and BCA students.",
      },
      {
        title: "Soft skills enhancement programs",
        details:
          "Programs focused on enhancing student’s communication finesse.",
      },
      {
        title: "Business programs",
        details: "Business perspective enhancing skill-intensive MBA programs.",
      },
    ],
  },
  {
    title: "Career Mapping",
    detail:
      "Empowering students with personalized career strategies and counseling.",
    tag: "interview",
    image: interviewImg,
    points: [
      { title: "Personalized guidance", details: "" },
      {
        title: "Long term planning",
        details: "",
      },
      {
        title: "Work-life balance",
        details: "",
      },
      {
        title: "Job satisfaction",
        details: "",
      },
    ],
  },
  {
    title: "Master mentoring",
    detail: "Elevating potential under masterful mentors.",
    tag: "career",
    image: group,
    points: [
      { title: "Skill development" },
      {
        title: "Long term support",
      },
      {
        title: "Enhanced decision making",
      },
      {
        title: "Faster learning curve",
      },
    ],
  },
];

const programs = {
  "Business Building Blocks": [
    "ChatGPT Masterclass",
    "Fundamentals of Business Analytics",
    "AI-Integrated Digital Marketing Masterclass for Beginners",
    "Public Speaking from Scratch",
    "Planning and Decision Making",
    "Solving Complex Problems",
  ],
  "Marketing Mavericks": [
    "Google Ads Masterclass",
    "Microsoft Ads Masterclass",
    "Facebook and Instagram Ads With AI Tools",
    "Linkedin Ads Masterclass",
    "Marketing Management Mastery",
    "Google Analytics Masterclass: Beginners to Advanced",
    "SEO With Content Marketing Masterclass",
    "Google Ads Optimization",
    "Email Marketing",
    "WhatsApp Marketing and Automation",
    "Canva Mastery",
  ],
  "Tech Titans": [
    "Python for Everyone: Beginners Level",
    "Python Intermediate Level",
    "Microsoft SQL",
    "Data Analysis Using Tableau",
    "Excel Essentials For Beginners",
    "Excel Skills for Intermediate Users",
    "Microsoft Power BI: A Complete Hands-on Training",
    "MS Excel For Data Science and Machine Learning",
    "Artificial Intelligence and Machine Learning Using Python",
    "Absolute Beginners Guide to AWS with Cloud Computing",
    "Statistics for Data Science & Machine Learning",
  ],
  "Sales and Negotiation Ninjas": [
    "Sales Mastery: Close Any Sale",
    "Negotiate to Win",
    "Inside Sales & Business Development Certificate Program",
  ],
  "Finance and Accounting Wizards": [
    "Evaluation of Investment Projects",
    "GST: The Complete Goods & Service Tax Course",
    "Accounting for Beginners",
    "Financial Literacy",
    "Stock Market Basics for Beginners",
    "Guide to General Banking",
  ],
  "Personal Growth and Empowerment": [
    "Enhance Your Emotional Intelligence",
    "Design Thinking for Innovation",
    "Unlock Creativity",
    "Unleash Your Potential",
    "How to be a Master Communicator",
    "Crack Your Next Interview",
    "Oratory and Public Speaking Mastery",
    "Beginners Guide to PowerPoint",
    "Personality Development For Advancement in Career",
  ],
  "People Powerhouse": [
    "Recruitment and Selection",
    "Building High-Performing Teams",
    "Delegation and Empowerment",
  ],
};

function program() {
  const [filtered, setfiltered] = useState(data);
  const [isAnimating, setIsAnimating] = useState(false);
  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);
  const [border3, setBorder3] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setIsAnimating(!isAnimating);
    result("course");
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
        <div className="relative flex flex-col justify-center items-center xl:max-w-[1524px] w-full min-h-[500px]">
          <div className="   absolute h-full w-full top-0 left-0 right-0 bottom-0">
            {/* <Image
              className="w-full h-full object-cover"
              width={500}
              height={100}
              src={HeaderImg}
              alt=""
            /> */}
          </div>
          <div className=" z-10 w-full flex flex-col gap-10 items-center justify-center c">
            <div className="z-10 max-w-6xl w-full">
              <p className="p-3  w-full bg-indigo-500 text-white  shadow-xl rounded-lg sm:w-96 text-sm float-right hover:rotate-3 rotate-0 duration-500 cursor-pointer">
                University programs - Business only
              </p>
            </div>
            <div className="flex items-center flex-col gap-3">
              <h1 className="z-10 text-5xl  font-bold text-gray-800 text-center">
                Want to increase your placement numbers ?
              </h1>
              <div
                className="z-10 p-2 flex-wrap bg-gray-800 text-white rounded-xl text-[1.9rem] max-w-2xl w-full  bg-cover object-cover scrollbar-none "
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                <Marquee
                  style={{ overflow: "hidden" }}
                  delay={0}
                  className="text-5xl"
                  direction="left"
                >
                  S&S hub provides your students an extra edge that they need to
                  get placed in the top most companies.
                </Marquee>
              </div>
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
                className="z-10 py-1 px-3 text-md bg-white animationPulse  hover:text-indigo-500 border-2 hover:border-indigo-600 rounded-lg border-gray-800 text-gray-900  duration-300"
              >
                Contact Us
              </button>
            </div>
            <div className="w-full">
              <div className="w-full flex justify-center ">
                <div className="flex flex-row justify-evenly items-center max-w-5xl w-full bg-gradient-to-r from-indigo-200 to-indigo-50  rounded-xl p-4 h-36">
                  <div className="flex items-center flex-col gap-4">
                    <span className="font-bold text-md">2019</span>
                    <span className="text-xs">Founded</span>
                  </div>

                  <div className="flex items-center flex-col gap-4">
                    <span className="font-bold text-md">3000+</span>
                    <span className="text-xs">Students</span>
                  </div>
                  <div className="flex items-center flex-col gap-4">
                    <span className="font-bold text-md">10+</span>
                    <span className="text-xs">Faculty experience</span>
                  </div>
                  <div className="flex items-center flex-col gap-4">
                    <span className="font-bold text-md">10+</span>
                    <span className="text-xs">Universities</span>
                  </div>
                </div>
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
            <hr className="border max-w-lg w-full" />
            <div className=" w-full flex justify-center my-5">
              <div className="flex flex-col justify-center items-center">
                <h2 className="mb-2  text-2xl md:text-4xl tracking-tight font-extrabold text-gray-700 ">
                  Campus Program's
                </h2>
                <p className="text-gray-600 sm:text-sm ">
                  Empowering students with you.
                </p>
              </div>
            </div>
            <div className="md:grid md:grid-cols-3  gap-5  justify-evenly max-w-5xl h-full">
              <div className=" md:col-span-1 md:w-full mb-5 md:mb-0 ">
                <div className="flex md:flex-col gap-3 md:h-full overflow-x-scroll md:overflow-visible scrollbar-none">
                  <div
                    onClick={() => {
                      result("course");
                      borderOne();
                    }}
                    className={`flex-1 rounded-lg cursor-pointer w-56 md:w-auto shadow-md md:hover:border-indigo-500 duration-300 border p-3  ${
                      border1
                        ? "border-2 border-indigo-500 bg-indigo-500 text-white"
                        : "border-2"
                    }`}
                  >
                    <div className="flex gap-3 w-56 md:w-auto flex-col">
                      <h1>Programs</h1>
                      <p className="text-xs">
                        Providing students with advanced preparation and
                        career-focused courses.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      result("interview");
                      borderTwo();
                    }}
                    className={`flex-1 rounded-lg cursor-pointer w-56 md:w-auto shadow-md md:hover:border-indigo-500 duration-200 border p-3 ${
                      border2
                        ? "border-2 border-indigo-500 bg-indigo-500 text-white"
                        : "border-2"
                    }`}
                  >
                    <div className="flex gap-3 w-56 md:w-auto flex-col">
                      <h1>Counseling </h1>
                      <p className="text-xs">
                        Empowering students with personalized career strategies
                        and counseling.
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      result("career");
                      borderThree();
                    }}
                    className={`flex-1 rounded-lg cursor-pointer w-56 md:w-auto shadow-md md:hover:border-indigo-500 duration-300 border p-3 ${
                      border3
                        ? "border-2 border-indigo-500 bg-indigo-500 text-white"
                        : "border-2"
                    }`}
                  >
                    <div className="flex gap-3 w-56 md:w-auto flex-col">
                      <h1>Mentoring </h1>
                      <p className="text-xs">
                        Elevating potential under masterful mentors.
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
                          className={`w-full h-56 object-cover rounded-md ${
                            isLoading
                              ? "scale-110 blur-2xl grayscale"
                              : "scale-100 blur-0 grayscale-0"
                          })`}
                          onLoadingComplete={() => setLoading(false)}
                          src={item.image}
                          width={400}
                          height={100}
                          placeholder="blur"
                          alt=""
                        />
                      </div>
                      <div className="flex  flex-col gap-1 px-4">
                        <h1 className=" text-2xl text-gray-600 font-bold">
                          {item.title}
                        </h1>
                        <p className="text-gray-700 text-sm">{item.detail}</p>
                        <div>
                          <div className="w-full">
                            {item?.points?.map((items, index) => (
                              <div className="">
                                <span className="text-xs text-gray-700 ">
                                  {index + 1} {items.title}
                                </span>
                              </div>
                            ))}
                          </div>
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
          <div className="w-full flex flex-col  md:items-center md:text-center  mb-8 lg:mb-16 px-3">
            <div className="max-w-6xl">
              <hr className="border" />
              <h2 className="mb-4 mt-6 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-700 ">
                Business/Finance Program's
              </h2>
              <p className="text-gray-600 sm:text-sm ">
                Program's are tageted to Bachlor of Business and Finance or BBA,
                BCOM, MBA etc.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full gap-4 my-7">
            <div className=" start-0 columns-1 sm:columns-2 md:columns-2 lg:columns-4 gap-5">
              <ProgramBuy
                title={"Business Building Blocks"}
                data={programs["Business Building Blocks"]}
              />
              <ProgramBuy
                title={"Marketing Mavericks"}
                data={programs["Marketing Mavericks"]}
              />
              <ProgramBuy
                title={"Personal Growth and Empowerment"}
                data={programs["Personal Growth and Empowerment"]}
              />
              <ProgramBuy
                title={"Finance and Accounting Wizards"}
                data={programs["Finance and Accounting Wizards"]}
              />
              <ProgramBuy
                title={"People Powerhouse"}
                data={programs["People Powerhouse"]}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col  md:items-center md:text-center  mb-8 lg:mb-16 px-3">
            <div className="max-w-6xl">
              <hr className="border" />
              <h2 className="mb-4 mt-6 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-700 ">
                Technical Program's
              </h2>
              <p className="text-gray-600 sm:text-sm ">
                Program's are tageted to Bachlor of technology or BCA, MCA,
                MTECH etc.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full gap-4 my-7">
            <div className=" columns-1 sm:columns-2 md:columns-2 lg:columns-4 gap-5">
              <ProgramBuy
                title={"Tech Titans"}
                data={programs["Tech Titans"]}
              />
            </div>
          </div>
        </div>

        <div className="xl:flex justify-center p-3">
          <div className="xl:max-w-6xl">
            <Testimonials />
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
