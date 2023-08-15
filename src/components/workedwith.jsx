import React from "react";
import gtibit from "../public/photos/colageLogo/gtbit2.png";
import global from "../public/photos/colageLogo/globalBadoria.jpg";
import qis from "../public/photos/colageLogo/qis.jpeg";
import Image from "next/image";
export default function workedwith() {
  return (
    <section className="w-full lg:flex flex-col items-center ">
      <div className="w-full flex justify-center">
        <div className="w-full h-full flex items-center justify-center gap-10 overflow-x-scroll overflow-y-scroll whitespace-nowrap scroll-smooth scrollbar-thin scrollbar-thumb-indigo-500 py-4">
          <div href="#" className="relative">
            <Image className="w-54" width={60} src={gtibit} alt="" />
            <div class="opacity-0 md:hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xs text-gray-600 -top-20">
              Guru Tegh Bahadur Institute of Technology
            </div>
          </div>
          <div href="#" className="relative">
            <Image className="w-54" width={70} src={global} alt="" />
            <div class="opacity-0 md:hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xs text-gray-600 -top-20">
              Global Engineering College
            </div>
          </div>
          <div href="#" className="relative">
            <Image className="w-54" width={60} src={qis} alt="" />
            <div class="opacity-0 md:hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xs text-gray-600 -top-20">
              QIS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
