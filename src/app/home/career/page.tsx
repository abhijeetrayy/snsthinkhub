"use client";
import React, { useEffect, useState } from "react";
import Workwith from "../../../components/workedwith";
import { BiRightArrowAlt } from "react-icons/bi";

const data = [
    {
        title: "Freelace Technical tutor",
        detail:
            "We're looking for experinced Technical teacher with required technical knowdlege",
        tag: "freelance",
    },
    {
        title: "React Developer",
        detail:
            "We're looking for experinced react developer with required knowdlege",
        tag: "software",
    },
    {
        title: "UI/UX Designer",
        detail:
            "We're looking for experinced UI/UX designer with required knowdlege",
        tag: "ui/ux",
    },
    {
        title: "Content Writter",
        detail:
            "We're looking for Content writter with required knowdlege",
        tag: "content",
    },
    {
        title: "Digital Markerter",
        detail:
            "We're looking for experinced Digital Marketer with required knowdlege",
        tag: "marketing",
    },
];

function page() {
    const [filtered, setfiltered] = useState(data);

    function result(tags: string) {
        const newArray = data.filter((obj) => obj.tag == tags)
        return setfiltered(newArray)
    }
    return (
        <div className="w-full md:flex md:justify-center md:items-center">
            <div className=" flex flex-col gap-4  p-4">
                <div className="flex flex-col gap-3 max-w-2xl ">
                    <span className="px-3 py-1 border-2 border-gray-600 rounded-2xl w-fit">
                        We're Hiring
                    </span>
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
                        <button onClick={() => setfiltered(data)} className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300">
                            All
                        </button>
                        <button
                            onClick={() => result("freelance")}
                            className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300"
                        >
                            Freelance
                        </button>
                        <button
                            onClick={() => result("software")}
                            className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300"
                        >
                            Software_Developer
                        </button>
                        <button
                            onClick={() => result("content")}
                            className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300"
                        >
                            Content/Design
                        </button>
                        <button
                            onClick={() => result("marketing")}
                            className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300"
                        >
                            Marketing
                        </button>
                        <button
                            onClick={() => result("ui/ux")}
                            className="'w-[220px] border-2 rounded-xl inline-block px-2 py-1 cursor-pointer hover:scale-105 ease-in-out duration-300"
                        >
                            UI/UX
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {filtered.map((item) => (
                        <div className="flex flex-col gap-8 max-w-3xl flex-1">
                            <hr className="bg-black border border-gray-400  rounded-xl" />
                            <div className="w-full flex flex-row gap-5 justify-between items-center">
                                <div className="flex flex-col gap-3">
                                    <h1 className="font-semibold text-xl text-gray-700">
                                        {item.title}
                                    </h1>
                                    <p className="text-gray-700 text-sm">{item.detail}</p>
                                </div>
                                <div className="">
                                    <button className="text-lg flex flex-row items-center md:hover:-mt-2 transform duration-300">
                                        Apply <BiRightArrowAlt />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default page;
