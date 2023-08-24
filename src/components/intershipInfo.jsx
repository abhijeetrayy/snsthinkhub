import React from "react";
import Accordion from "./accordian";

import { BiPlayCircle, BiTimer } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import IntershihfillButton from "./intershipfillform";

export default function intershipInfo() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[999px]">
        <div className="flex flex-col mt-9 justify-between md:flex-row">
          <div className="flex flex-col gap-5 px-4 py-5 border border-gray-200 rounded-lg">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-bold">
                Frontend Developer, remote work, at S&S

              </h2>

              <div className="flex flex-col gap-2 border rounded-lg border-gray-200 p-2 md:p-4">
                <h3 className="text-lg font-bold text-indigo-500">
                  frontend web Development
                </h3>
                <h4 className="text-gray-500 font-bold">SnSThinkHub</h4>
                <p className="text-md text-gray-500">
                  We are seeking a highly motivated and enthusiastic Fullstack Development Intern to join our dynamic team.
                </p>
                <span className="font-bold text-gray-500">Work From Home</span>
                <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                  <div>
                    <div className="flex flex-row items-center gap-2 ">
                      <span>
                        <BiPlayCircle />
                      </span>
                      <span className="text-gray-600">Start Date</span>
                    </div>
                    <div className="text-gray-400 ">01-09-23</div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center gap-2 ">
                      <span>
                        <BsCalendarDate />
                      </span>
                      <span className="text-gray-600">Duration</span>
                    </div>
                    <div className="text-gray-400 ">3 Month</div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center gap-2 ">
                      <span>
                        <FaMoneyBillAlt />
                      </span>
                      <span className="text-gray-600">Stipend</span>
                    </div>
                    <div className="text-gray-400 ">10000/month</div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center gap-2 ">
                      <span>
                        <BiTimer />
                      </span>
                      <span className="text-gray-600">Apply By</span>
                    </div>
                    <div className="text-gray-400 ">01-09-23</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-lg font-bold text-gray-500 hover:text-gray-700">
                  About SnSThinkHub
                </span>
                <span className="text-gray-500 hover:text-gray-700">
                  SnSThinkhub offers a variety of programs and services that are designed to help students develop the skills and knowledge
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold">
                About the work from home job/internship
              </h2>
              <div>
                <span>
                  Selected intern's day-to-day responsibilities include:
                </span>
                <ul className=" text-gray-500">
                  <li>
                    1. Code daily in our stack: Mongo, React JS,
                    NextJs, HTML, CSS, API
                  </li>
                  <li>
                    2. Create high-quality, testable and efficient code that can
                    scale with a significant number of users - adhering to cloud
                    application development practices
                  </li>
                  <li>
                    3. Architect, develop and drive improvements to our evolving
                    back-end and front-end infrastructure
                  </li>
                  {/* <li>
                    4. Ensure implementation of robust security and data
                    protection measures
                  </li> */}
                  <li>
                    4. Execute full lifecycle software development practices
                  </li>
                  <li>
                    5. Inform senior leadership of new tech ideas, products, and
                    approaches that could help the business grow and improve
                    customer experiences
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-lg  text-gray-600">Skills required</span>
                <div className="flex flex-col gap-5 md:flex-row">
                  <div>
                    <span className="p-2 rounded-lg border border-gray-200">
                      React Js
                    </span>
                  </div>

                  <div>
                    <span className="p-2 rounded-lg border border-gray-200">
                      Next.js
                    </span>
                  </div>
                  <div>
                    <span className="p-2 rounded-lg border border-gray-200">
                      GitHub
                    </span>
                  </div>
                  <div>
                    <span className="p-2 rounded-lg border border-gray-200">
                      HTML
                    </span>
                  </div>
                  <div>
                    <span className="p-2 rounded-lg border border-gray-200">
                      CSS
                    </span>
                  </div>
                  {/* <div>
                    <span className="p-2 rounded-lg border border-gray-200">
                      ReactJS
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-lg  text-gray-600">Who can apply</span>
                <span>Candidates can apply who:</span>
                <ul className="flex gap-5 flex-col pl-6">
                  <li className="flex flex-row">
                    1. Are available for the work from home job/internship
                  </li>
                  <li className="flex flex-row">
                    2. Can start the work from home job/internship between 1st
                    Sept'23 and 6th Dec'23
                  </li>
                  <li className="flex flex-row">
                    3. Are available for duration of 3 months
                  </li>
                  <li className="flex flex-row">
                    4. Have relevant skills and interests
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-lg font-bold text-gray-600">Perks</h2>
                <div className="flex flex-row gap-5">
                  <p className=" text-gray-500 p-2 rounded-lg border border-gray-200">
                    Certificate
                  </p>
                  <p className=" text-gray-500 p-2 rounded-lg border border-gray-200">
                    5 days a week
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <span className="text-lg  text-gray-600">
                  Number of openings
                </span>
                <span>1</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <IntershihfillButton ids={"000011"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
