import React from "react";
import gtibit from "../public/photos/colageLogo/gtbit2.png";
import global from "../public/photos/colageLogo/globalBadoria.jpg";
import qis from "../public/photos/colageLogo/qis.jpeg";
import Image from "next/image";
export default function workedwith() {
  return (
    <section className="lg:flex flex-col items-center ">
      <div className="">
        <div className="min-w-full h-full flex gap-5 items-center justify-evenly overflow-x-scroll overflow-y-scroll whitespace-nowrap scroll-smooth scrollbar-thin scrollbar-thumb-indigo-500 py-4">
          <div href="#" className="">
            <Image className="w-54" width={60} src={gtibit} alt="" />
          </div>
          <div href="#" className="">
            <Image className="w-54" width={70} src={global} alt="" />
          </div>
          <div href="#" className="">
            <Image className="w-54" width={60} src={qis} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
