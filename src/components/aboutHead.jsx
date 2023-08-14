import Image from "next/image";

import AboutImg from "../public/photos/groupMam.jpg";
import Link from "next/link";

const AboutHeader = () => {
  return (
    <div className="w-full flex justify-center">
      <div className=" flex flex-col md:flex-row p-5 gap-4 justify-center items-center min-h-[350px] ">
        <div className=" flex flex-1 items-center flex-col  ">
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-700  font-bold leading-snug text-[3em] sm:text-4xl md:text-5xl lg:text-6xl break-inside-avoid-column">
              About Us
            </h1>
            <p className="text-md text-gray-700">
              Creating change through our specilized Courses and Career
              Guidence.
            </p>
            <Link
              className="w-fit px-3 py-2 md:px-5 md:py-3  text-lg rounded-md hover:bg-indigo-500 bg-white border-2 border-gray-600 text-gray-700 bg-cover object-cover duration-500 hover:text-white"
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
            height={100}
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
