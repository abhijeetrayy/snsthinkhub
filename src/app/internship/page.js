 "use client"
import React from "react";
import Link from "next/link";
import Contactus from "../../components/contactus"
import CourseHeader from "../../components/couserHeader"
import MoreButton from "../../components/moreButton"
import {useState} from "react"

export default function page() {
    
     const data = [
        "Remote",
        "Remote",
        "Inoffice",
        "Inoffice",
        "Inoffice",
        "Inoffice",
        "Inoffice",
        "Inoffice",
        "Inoffice",
        "Remote",
        "Remote",
    ];
    const [filtered, setFilter] = useState(data)
    function filterData(type){
       const filteredData = data.filter(filterthedata)
       function filterthedata(datas){
        return datas == type
       }
       setFilter(filteredData)
    }


    
   

    return (
        <>
            <CourseHeader title={"Intership"} />
            <div className="w-full flex  justify-center mb-6">

                <div className="w-full flex justify-between items-center sm:w-[840px] lg:w-[1124px] p-6 m-3">
                    <span className="text-4xl font-extrabold">Internships</span>
                </div>
            </div>
            <div className="w-full flex  justify-center mb-6">

                <div className="w-full flex justify-between items-center sm:w-[740px] lg:w-[1124px] p-6 m-3 shadow-md border-2 rounded-lg" >
                    <span>Filters</span>
                    <div className="ml-3 flex flex-col sm:flex-row gap-3 ">
                        <button onClick={()=> setFilter(data)} className="z-50 px-3 py-2 rounded-md bg-indigo-50 text-indigo-400 mr-3 sm:text-sm hover:bg-indigo-200 hover:border-0 transition  text-xs">All</button>
                        <button onClick={()=> filterData("Remote")} className="z-50 px-3 py-2 rounded-md bg-indigo-50 text-indigo-400 mr-3 sm:text-sm  hover:bg-indigo-200 hover:border-0 transition  text-xs">Remote</button>
                        <button onClick={()=> filterData("Inoffice")} className="z-50 px-3 py-2 rounded-md bg-indigo-50 text-indigo-400 sm:text-sm hover:bg-indigo-200 hover:border-0 transition  text-xs">Offline/In Office</button>
                    </div>
                </div>
            </div>
            <div className="w-full flex  justify-center mb-6">

                <div className="w-full flex justify-between items-center sm:w-[840px] lg:w-[1124px] p-2 ">
                    <span className="text-sm ">Results:</span>
                </div>
            </div>

            <div className="w-full flex  justify-center ">
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                    {filtered.map((item) => (
                        <div className="border-0 shadow-md rounded-md max-w-xs p-3 bg-slate-50 hover:bg-slate-100 transition">
                            <h2>new</h2>
                            <div className="p-6">
                                <h2 className=" text-2xl font-bold">Web Developer</h2>

                                <span className=" font-sans">Perl Organization</span>
                                <div className="mb-2">
                                    <Link href={"/"}>
                                        <span className="text-sm underline decoration-dotted">
                                            Dehradun,India
                                        </span>
                                    </Link>
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
                                                    clip-rule="evenodd"
                                                ></path>
                                                <path d="M10 13H2v7.5a.5.5 0 00.5.5h19a.5.5 0 00.5-.5V13h-8v1.51a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V13z"></path>
                                            </svg>
                                            <span className="text-sm">{item}</span>
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
                                                fill-rule="evenodd"
                                                d="M2.45168 6.10292c-.30177-.125-.62509-.18964-.95168-.1903V4.08678c.32693-.00053.6506-.06518.95267-.1903.30331-.12564.57891-.30979.81105-.54193.23215-.23215.4163-.50775.54194-.81106.12524-.30237.18989-.62638.19029-.95365H9.0902c0 .3283.06466.65339.1903.9567.12564.30331.30978.57891.54193.81106.23217.23215.50777.41629.81107.54193.3032.12558.6281.19024.9562.1903v1.83556c-.3242.00155-.6451.06616-.9448.19028-.3033.12563-.5789.30978-.81102.54193-.23215.23214-.4163.50774-.54193.81106-.12332.2977-.18789.61638-.19024.93849H3.99496c-.00071-.32645-.06535-.64961-.19029-.95124-.12564-.30332-.30979-.57891-.54193-.81106-.23215-.23215-.50775-.4163-.81106-.54193zM0 .589843C0 .313701.223858.0898438.5.0898438h12.0897c.2762 0 .5.2238572.5.5000002V9.40715c0 .27614-.2238.5-.5.5H.5c-.276143 0-.5-.22386-.5-.5V.589843zM6.54427 6.99849c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2zm8.05523-2.69917v7.10958H2.75977c-.27615 0-.5.2238-.5.5v.5c0 .2761.22385.5.5.5H15.422c.4419 0 .6775-.2211.6775-.6629V4.29932c0-.27615-.2239-.5-.5-.5h-.5c-.2761 0-.5.22385-.5.5z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="text-sm">Stipend</span>
                                    </div>
                                </div>
                                <div className=" text-sm  mt-3">
                                    <sapn>*</sapn>{" "}
                                    <span>
                                        Are you an aspiring data analyst seeking an unparalleled
                                        opportunity to gain hands-on experience while working with a
                                        prestigious Management Consulting firm?
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <Link href={"/internship/WebDevelopment"} >
                                        <MoreButton data={"More..."} size={10} style={"w-16 h-7  flex items-center justify-center rounded-md bg-blue-500 text-sm font-medium text-white hover:bg-blue-700 ring-0 border-0"}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Contactus />
        </>
    );
}
