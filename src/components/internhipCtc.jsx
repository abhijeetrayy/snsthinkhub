import React from "react";
import Image from "next/image";
import internship from "../public/img/internhip.jpg";
import Link from "next/link";
import MoreButton from "./moreButton";

function internhipCtc() {
  return (
    <div className="w-full flex justify-center bg-indigo-300">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-center items-center  my-7 p-7 gap-10">
        <div className="flex-1">
          <div className="text-5xl text-indigo-700 font-semibold w-full">
            An{" "}
            <Link href={"/home/internship"} className="text-white underline">
              internship
            </Link>{" "}
            internship is a transformative learning experience, bridging the gap
            between education and professional practice.
          </div>
        </div>
        <div className="">
          <div className="text-white font-bold">Hot Pick</div>
          <div>
            <div className="border-0 shadow-md rounded-md max-w-xs p-3 bg-slate-50 hover:bg-slate-100 transition">
              {/* <h2>new</h2> */}
              <div className="p-6">
                <h2 className=" text-2xl font-bold">
                  Front End Web Developer - React/Next Js
                </h2>

                <span className=" font-sans">SsndSthinkhub</span>
                <div className="mb-2 cursor-default">
                  <p>
                    <span className="text-sm underline decoration-dotted">
                      Dehradun,India
                    </span>
                  </p>
                </div>
                <div>
                  <div className="inline-block mr-2 border-2 rounded-md p-1 w-fit">
                    <span className=" align-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                        role="img"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className=" w-4 h-4 inline mr-2 text-blue-600"
                      >
                        <path
                          d="M7.5 3a.5.5 0 00-.5.5V7H2.5a.5.5 0 00-.5.5V11h20V7.5a.5.5 0 00-.5-.5H17V3.5a.5.5 0 00-.5-.5h-9zM15 7H9V5h6v2z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M10 13H2v7.5a.5.5 0 00.5.5h19a.5.5 0 00.5-.5V13h-8v1.51a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V13z"></path>
                      </svg>
                      <span className="text-sm">Remote</span>
                    </span>
                  </div>
                  <div className=" inline-block  border-2 rounded-md p-1 w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 13"
                      role="presentation"
                      aria-hidden="true"
                      aria-label="Salary"
                      className=" w-4 h-4 inline mr-2 text-blue-600"
                    >
                      <defs></defs>
                      <path
                        fill="#595959"
                        fillRule="evenodd"
                        d="M2.45168 6.10292c-.30177-.125-.62509-.18964-.95168-.1903V4.08678c.32693-.00053.6506-.06518.95267-.1903.30331-.12564.57891-.30979.81105-.54193.23215-.23215.4163-.50775.54194-.81106.12524-.30237.18989-.62638.19029-.95365H9.0902c0 .3283.06466.65339.1903.9567.12564.30331.30978.57891.54193.81106.23217.23215.50777.41629.81107.54193.3032.12558.6281.19024.9562.1903v1.83556c-.3242.00155-.6451.06616-.9448.19028-.3033.12563-.5789.30978-.81102.54193-.23215.23214-.4163.50774-.54193.81106-.12332.2977-.18789.61638-.19024.93849H3.99496c-.00071-.32645-.06535-.64961-.19029-.95124-.12564-.30332-.30979-.57891-.54193-.81106-.23215-.23215-.50775-.4163-.81106-.54193zM0 .589843C0 .313701.223858.0898438.5.0898438h12.0897c.2762 0 .5.2238572.5.5000002V9.40715c0 .27614-.2238.5-.5.5H.5c-.276143 0-.5-.22386-.5-.5V.589843zM6.54427 6.99849c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2zm8.05523-2.69917v7.10958H2.75977c-.27615 0-.5.2238-.5.5v.5c0 .2761.22385.5.5.5H15.422c.4419 0 .6775-.2211.6775-.6629V4.29932c0-.27615-.2239-.5-.5-.5h-.5c-.2761 0-.5.22385-.5.5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm">Rs 10000 /-</span>
                  </div>
                </div>
                <div className=" text-sm  mt-3">
                  <span>*</span>{" "}
                  <span>
                    We are seeking a highly motivated and enthusiastic Front-End
                    Development Intern to join our dynamic team.
                  </span>
                </div>
                <div className="mt-3">
                  <Link href={"/home/internship/WebDevelopment"}>
                    <MoreButton
                      data={"More..."}
                      size={10}
                      style={
                        "w-16 h-7  flex items-center justify-center rounded-md bg-indigo-500 text-sm font-medium text-white hover:bg-indigo-600 ring-0 border-0"
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default internhipCtc;
