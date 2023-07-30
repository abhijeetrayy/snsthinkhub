'use client'
import React from "react";
import Workwith from "../../../components/workedwith";
import { BiRightArrowAlt } from "react-icons/bi"
const data = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

function page() {
    return (
        <div className="w-full flex flex-col justify-center md:items-center" >

            <div className="flex flex-col gap-4 max-w-7xl p-4">
                <div className="flex flex-col gap-3 max-w-2xl ">
                    <span className="px-3 py-1 border-2 border-gray-600 rounded-2xl w-fit">We're Hiring</span>
                    <h1 className="text-4xl font-extrabold text-gray-700 ">
                        Be part of our mission
                    </h1>
                    <p className="text-sm">
                        We're looking for passionate people to join us on our mission. We
                        value flat hierarchies, clear communication, and full ownership and
                        responsibility.
                    </p>
                </div>
                <div className="">
                    <div className="w-full h-full flex gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-thin scrollbar-thumb-indigo-500 py-4">
                        <button className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300">
                            All

                        </button>
                        <button className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300">
                            Frelance

                        </button>
                        <button className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300">
                            Software_Developer

                        </button>
                        <button className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300">
                            Content/Design

                        </button>
                        <button className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300">
                            Marketing

                        </button>
                        <button className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300">
                            UI/UX

                        </button>

                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {data.map(item => (<div className="flex flex-col gap-8">
                        <hr className="bg-black border border-gray-400  rounded-xl" />
                        <div className="flex flex-row gap-5 justify-center items-center ">
                            <div className="flex flex-col gap-3">

                                <h1 className="font-semibold text-xl text-gray-700">Freelace Technical tutor</h1>
                                <p className="text-gray-700 text-sm">We're looking for experinced Technical teacher with required technical knowdlege</p>
                            </div>
                            <div className=""><button className="text-lg flex flex-row items-center md:hover:-mt-2 transform duration-300">Apply <BiRightArrowAlt /></button></div>
                        </div>
                    </div>))}

                </div>
            </div>
        </div>
    );
}

export default page;
