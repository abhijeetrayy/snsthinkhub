import React from "react";
import Accordion from "./accordian";
import Card from "./card";
import { TiTick } from "react-icons/ti";
import Wave from "../public/img/waves.svg";
import Image from "next/image";
import Team from "./team"
import Review from "./review"

import Link from "next/link"
import CourseRegistration from "./courseRegistration"
export default function CourseDetail() {
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-[1324px]">
                <div className="flex flex-col mt-9 justify-between md:flex-row">
                    <div className="flex flex-col gap-5 px-10">
                        <div className="flex flex-col gap-5 bg-indigo-600 p-3 rounded-lg">
                            <h2 className="text-5xl font-bold text-white">
                                Become a professional Web Developer from Scratch
                            </h2>

                            <div>
                                <p className="text-md text-gray-200">
                                    This course covers all you need to know about becoming a top
                                    skilled web developer even if you never programmed before!
                                </p>
                            </div>
                            <div><span className="text-gray-200 hover:text-gray-300">1652 Rating | 4.3 Reviews</span></div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="text-2xl font-bold">What You will Learn</h2>
                            <div>
                                <p className=" text-gray-500">
                                    Charles tickety-boo squiffy nice one cockup pardon you get
                                    stuffed mate my good sir geeza. Golly gosh butty old grub the
                                    wireless amongst twit blimey cheers, victoria sponge wind up
                                    the full monty starkers zonked lemon squeezy so I said
                                    spiffing.!
                                </p>
                            </div>
                            <div>
                                <ul className="flex gap-5 flex-col pl-6">
                                    <li className="flex flex-row">
                                        <TiTick className="text-indigo-500 text-2xl" /> "The Complete
                                        Freelancer Guide" e-Book
                                    </li>
                                    <li className="flex flex-row">
                                        <TiTick className="text-indigo-500 text-2xl" /> 30 Free
                                        Responsive Templates
                                    </li>
                                    <li className="flex flex-row">
                                        <TiTick className="text-indigo-500 text-2xl" /> Make REAL
                                        life web apps with our final projects
                                    </li>
                                    <li className="flex flex-row">
                                        <TiTick className="text-indigo-500 text-2xl" /> PDF Manuals
                                        and Guides
                                    </li>
                                    <li className="flex flex-row">
                                        <TiTick className="text-indigo-500 text-2xl" /> Massive Q&A
                                        Community
                                    </li>
                                    <li className="flex flex-row">
                                        <TiTick className="text-indigo-500 text-2xl" /> Improvement
                                        Suggestions for Course
                                    </li>
                                    <li className="flex flex-row">
                                        <TiTick className="text-indigo-500 text-2xl" /> Learn to get
                                        free hosting forever
                                    </li>
                                    <li className="flex flex-row">
                                        <TiTick className="text-indigo-500 text-2xl" /> All Lectures
                                        and Projects Source Codes
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div>
                                <h2 className="text-2xl font-bold">Contet</h2>
                                <p className=" text-gray-500">3 sections • 190 lectures • 26h 41m total length</p>
                            </div>
                            <div className="max-w-[700px] p-5 border rounded-lg">
                                <Accordion />
                            </div>
                        </div>
                    </div>

                    <div className=" my-3 mx-auto sm:max-w-[370px] md:min-w-[420px] px-3 w-full">
                        <div className=" shadow-lg rounded-lg py-2">

                            <div>
                                <img
                                    className="w-full h-64 object-cover rounded-t-lg"
                                    src="https://images.pexels.com/photos/6816529/pexels-photo-6816529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                />
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col">
                                    <div className="flex flex-row justify-around items-center mt-6 mb-2">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">
                                                Rs 150.00
                                            </h2>
                                        </div>
                                        <div>
                                            <p className="text-md text-gray-500">1000 Enrolled</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-center my-5 gap-3">
                            <CourseRegistration/>
                                
                                {/* <button className="text-white py-4 px-9 rounded-lg  bg-indigo-600 hover:bg-indigo-500 w-56">
                                Buy Now
                            </button> */}
                                <p className="text-sm text-gray-500">
                                    All Secured with RazorPay India
                                </p>
                            </div>
                            <div className="w-full px-5 mt-7">
                                <div className="flex gap-4 flex-col">
                                    <h2 className="text-2xl font-bold">Coures Contain</h2>
                                    <ul className="flex gap-3 flex-col pl-6">
                                        <li className="flex flex-row">
                                            <TiTick className="text-indigo-500 text-2xl" />
                                            25 hours on-demand video
                                        </li>
                                        <li className="flex flex-row">
                                            <TiTick className="text-indigo-500 text-2xl" /> 4 articles
                                        </li>
                                        <li className="flex flex-row">
                                            <TiTick className="text-indigo-500 text-2xl" /> 97
                                            downloadable resources
                                        </li>
                                        <li className="flex flex-row">
                                            <TiTick className="text-indigo-500 text-2xl" /> Full lifetime
                                            access
                                        </li>
                                        <li className="flex flex-row">
                                            <TiTick className="text-indigo-500 text-2xl" />
                                            Access on mobile and TV
                                        </li>
                                    </ul>
                                </div>
                                <div className="">
                                    <Image className=" p-0 m-0" width={100} src={Wave} />
                                </div>
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold">Traning Student</h2>
                                    <p className="text-sm text-gray-500">
                                        Get your team access to 16,000+ top Udemy courses anytime,
                                        anywhere.
                                    </p>
                                    <div className="flex justify-center w-full my-3">
                                        <Link href={"/contact-us"}>
                                        <button className="text-white py-4 px-9 rounded-lg  bg-indigo-600 hover:bg-indigo-500 w-56">
                                            Try Bussiness
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-[790px] p-7 flex flex-col gap-7">

                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-bold">Course Description</h2>
                        <div>
                            <p className=" text-gray-500">
                                Become a Web Developer from Scratch" is probably one of the most complete and comprehensive online courses you will ever get to see covering web development from top to bottom. In more than 30 hours of content, this course will cover all you need to know about how to become a top skilled web developer even if you never programmed before.
                            </p>
                        </div>
                        <div>
                            <ul className="flex gap-5 flex-col pl-6 ">
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> "The Complete
                                    Freelancer Guide" e-Book
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> 30 Free
                                    Responsive Templates
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> Make REAL
                                    life web apps with our final projects
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> PDF Manuals
                                    and Guides
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> Massive Q&A
                                    Community
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> Improvement
                                    Suggestions for Course
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> Learn to get
                                    free hosting forever
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> All Lectures
                                    and Projects Source Codes
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-bold">Who this course is for:</h2>
                        <div>
                            <p className=" text-gray-500">
                                Charles tickety-boo squiffy nice one cockup pardon you get
                                stuffed mate my good sir geeza. Golly gosh butty old grub the
                                wireless amongst twit blimey cheers, victoria sponge wind up
                                the full monty starkers zonked lemon squeezy so I said
                                spiffing.!
                            </p>
                        </div>
                        <div>
                            <ul className="flex gap-5 flex-col pl-6">
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> "The Complete
                                    Freelancer Guide" e-Book
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> 30 Free
                                    Responsive Templates
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> Make REAL
                                    life web apps with our final projects
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> PDF Manuals
                                    and Guides
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> Massive Q&A
                                    Community
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> Improvement
                                    Suggestions for Course
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> Learn to get
                                    free hosting forever
                                </li>
                                <li className="flex flex-row">
                                    <TiTick className="text-indigo-500 text-2xl" /> All Lectures
                                    and Projects Source Codes
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div><Review /></div>
                <div><Team /></div>
                <div>
                    <Card />
                </div>
            </div>
        </div>
    );
}
