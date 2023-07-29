import Image from "next/image";

import AboutImg from "../public/img/header.jpg";
import Link from "next/link";

const AboutHeader = () => {
  return (
    <div className="w-full flex justify-center">
      <div className=" flex flex-col md:flex-row p-5 gap-4 justify-center items-center min-h-[350px] ">
        <div className=" flex flex-1 items-center flex-col  ">
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-700 mb-6 font-bold leading-snug text-[3em] sm:text-5xl md:text-7xl lg:text-8xl break-inside-avoid-column">
              About Us
            </h1>
            <p className="text-md text-gray-700">
              Creating change through our specilized Courses and Career
              Guidence.
            </p>
            <Link
              className="w-fit px-7 py-4 font-bold text-lg rounded-md bg-indigo-500 hover:bg-indigo-600 text-white"
              href={"/home/courses"}
            >
              Join Course
            </Link>
          </div>
        </div>
        <div className="flex-1 overflow-clip p-5">
          <Image
            className="rounded-md  "
            width={700}
            height={700}
            quality={70}
            src={AboutImg}
            placeholder="blur"
            alt="AboutImg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
