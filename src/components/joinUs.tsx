import React from "react";
import JoinUsImg from "../public/join_us.png";
import Image from "next/image";
import Link from "next/link";

function joinUs() {
  return (
    <div className="flex justify-center">
      <div className="relative max-w-[999px] h-auto flex flex-col justify-center items-center  p-10  my-8 ">
        <div className="flex flex-col md:gap-3 items-center ">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-700">
            Join Our Team
          </h1>
          <Link
            href={"/home/career"}
            className=" scale-50 md:scale-100 px-7 py-2 text-lg text-white bg-indigo-500 hover:bg-indigo-600 w-fit rounded-md"
          >
            Join
          </Link>
        </div>

        {/* <div className="flex-1 grow w-full   ">
          <Image
            className="w-[950px]"
            src={JoinUsImg}
            width={1000}
            height={1000}
            alt="JoinUs Image"
          />
        </div> */}
      </div>
    </div>
  );
}

export default joinUs;
