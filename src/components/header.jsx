"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className=" group relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 lg:h-[500px]">
      <div
        class="absolute inset-x-0 -top-40 z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
        <img
          className="-z-20 object-cover  w-full h-56 lg:group-hover:scale-105 duration-1000 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="group relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl justify-center lg:justify-normal">
        <div className=" mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className=" lg:absolute lg:top-16 h-auto lg:h-auto">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Welcome
            </p>
            <h2 className=" mb-5 font-sans text-md  leading-5 font-bold tracking-tight text-indigo-500 md:text-2xl sm:leading-none object-cover">
              <TypeAnimation
                sequence={[
                  `Looking for placement,\n Internsihp,\n Technical courses?.`,
                  1000,
                ]}
                speed={50}
                style={{
                  whiteSpace: "pre-line",
                  fontSize: "2em",
                  lineHeight: "1.3em",
                }}
              />
            </h2>
            <div className="flex items-center">
              <Link
                href="/about"
                className="z-50 inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
              >
                CheckOut Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
