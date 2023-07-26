"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import HeaderImg from "../public/img/header.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="">
      <div className=" group relative flex flex-col-reverse py-8 lg:pt-0 lg:flex-col lg:pb-0 lg:h-[500px]">
        <div
          className="absolute inset-x-0 -top-40 z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className=" overflow-hidden inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className=" z-10 absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <Image
            className="-z-20 object-cover scale-100 lg:group-hover:scale-105 w-full h-56  duration-1000 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={HeaderImg}
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="group relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl justify-center lg:justify-normal">
          <div className=" mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className=" lg:absolute lg:top-16 h-auto lg:h-auto">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Welcome
              </p>
              <svg
                className="absolute z-20 w-36 sm:w-52 right-0 top-0 lg:hidden"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                width="100%"
                id="blobSvg"
                style={{ opacity: 100 }}
                filter="blur(0px)"
              >
                <path
                  id="blob"
                  fill="#6366f1"
                  className="bg-indigo-300"
                  style={{ opacity: 0.35 }}
                >
                  <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    values="M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M392.2525,331.53996Q379.05994,413.07992,285.7525,456.15485Q192.44505,499.22978,100.80019,432.44731Q9.15533,365.66484,30.81018,260.57493Q52.46503,155.48501,121.45005,74.10764Q190.43506,-7.26974,268.13261,60.97003Q345.83016,129.2098,375.63761,189.6049Q405.44505,250,392.2525,331.53996Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z"
                  ></animate>
                </path>
              </svg>
              <h2 className=" mb-5 font-sans text-2xl leading-5 font-bold tracking-tight text-indigo-500 sm:text-3xl md:text-4xl xl:text-5xl  sm:leading-none object-cover">
                <TypeAnimation
                  sequence={[
                    `Education \n for Excellence, \n'Placement' for Success`,
                    1000,
                  ]}
                  speed={50}
                  style={{
                    whiteSpace: "pre-line",

                    lineHeight: "1.3em",
                  }}
                />
              </h2>
              <div className="flex items-center">
                <Link
                  href="/home/courses"
                  className=" z-40 inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                >
                  Join Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
