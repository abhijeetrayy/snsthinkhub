import React from "react";
import Accordion from "./accordian";

import { BiPlayCircle, BiTimer } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";

export default function intershipInfo() {
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-[1324px]">
                <div className="flex flex-col mt-9 justify-between md:flex-row">
                    <div className="flex flex-col gap-5 px-10 py-10 border border-gray-200 rounded-lg">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-3xl font-bold">
                                Full Stack Development work from home job/internship at Mactores
                            </h2>

                            <div className="flex flex-col gap-2 border rounded-lg border-gray-200 p-4">
                                <h3 className="text-lg font-bold text-indigo-500">Full Stack Development</h3>
                                <h4 className="text-gray-500 font-bold">SnSThinkHub</h4>
                                <p className="text-md text-gray-500">
                                    This course covers all you need to know about becoming a top
                                    skilled web developer even if you never programmed before!
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
                                        <div className="text-gray-400 ">13-06-23</div>
                                    </div>
                                    <div>
                                        <div className="flex flex-row items-center gap-2 ">
                                            <span>
                                                <BsCalendarDate />
                                            </span>
                                            <span className="text-gray-600">Duration</span>
                                        </div>
                                        <div className="text-gray-400 ">6 Month</div>
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
                                        <div className="text-gray-400 ">13-07-23</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-lg font-bold text-gray-500 hover:text-gray-700">
                                    About SnSThinkHub
                                </span>
                                <span className="text-gray-500 hover:text-gray-700">
                                    This course covers all you need to know about becoming a top
                                    skilled web developer even if you never programmed before!
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
                                        1. Code daily in our stack: Mongo, Express JS, React JS,
                                        Node JS, HTML, CSS
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
                                    <li>
                                        4. Ensure implementation of robust security and data
                                        protection measures
                                    </li>
                                    <li>
                                        5. Execute full lifecycle software development practices
                                    </li>
                                    <li>
                                        6. Inform senior leadership of new tech ideas, products, and
                                        approaches that could help the business grow and improve
                                        customer experiences
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-lg  text-gray-600">Skills required</span>
                                <div className="flex flex-col gap-5 md:flex-row">
                                    <div>
                                        <span className="p-2 rounded-lg border border-gray-200">CSS</span>
                                    </div>

                                    <div>
                                        <span className="p-2 rounded-lg border border-gray-200">Express.js</span>
                                    </div>
                                    <div>
                                        <span className="p-2 rounded-lg border border-gray-200">GitHub</span>
                                    </div>
                                    <div>
                                        <span className="p-2 rounded-lg border border-gray-200">HTML</span>
                                    </div>
                                    <div>
                                        <span className="p-2 rounded-lg border border-gray-200">MongoDB</span>
                                    </div>
                                    <div>
                                        <span className="p-2 rounded-lg border border-gray-200">ReactJS</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-lg  text-gray-600">Who can apply</span>
                                <span>Only those candidates can apply who:</span>
                                <ul className="flex gap-5 flex-col pl-6">
                                    <li className="flex flex-row">
                                        1. are available for the work from home job/internship
                                    </li>
                                    <li className="flex flex-row">
                                        2. can start the work from home job/internship between 1st
                                        Jun'23 and 6th Jul'23
                                    </li>
                                    <li className="flex flex-row">
                                        3. are available for duration of 3 months
                                    </li>
                                    <li className="flex flex-row">
                                        4. have relevant skills and interests
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div>
                                <h2 className="text-lg font-bold text-gray-600">Perks</h2>
                                <div className="flex flex-row gap-5">
                                    <p className=" text-gray-500 p-2 rounded-lg border border-gray-200">Certificate</p>
                                    <p className=" text-gray-500 p-2 rounded-lg border border-gray-200">5 days a week</p>

                                </div>
                            </div>
                            <div className="flex flex-col gap-4 ">
                                <span className="text-lg  text-gray-600">Number of openings</span>
                                <span>5</span>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center"><button className="px-6 py-3 text-white font-bold bg-indigo-600 rounded-lg hover:bg-indigo-500">Apply</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
