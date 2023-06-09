import Link from "next/link";
import ClickButton from "./moreButton"

import React from "react";

export default function card() {
    return (
        <>
            <div className="w-full " >
                <div className="h-fit  flex justify-center items-center py-7  flex-col">
                    <div className="flex flex-col items-center mb-6 bg-white rounded-lg shadow-md px-8 py-3 bg-cover duration-500 hover:px-10">
                        <h2 className="text-5xl font-extrabold mb-5 float-left  text-indigo-600">
                            Course's
                        </h2>
                        <p>
                            Our Courses are Indurties expret fit, which{" "}
                            <span className="text-indigo-600">make our student</span> reach
                            their{" "}
                            <span className="text-indigo-600">potential and career</span>.
                        </p>
                    </div>
                    <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                      
                            <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                                <h3 className="mb-3 text-xl font-bold text-indigo-600">
                                    Beginner Friendly
                                </h3>
                                <div className="relative">
                                    <img
                                        className="w-full rounded-xl"
                                        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                        alt="Colors"
                                    />
                                    <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                                        FREE
                                    </p>
                                </div>
                                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                                    Javascript Bootcamp for Absolute Beginners
                                </h1>
                                <div className="my-4">
                                    <div className="flex space-x-1 items-center">
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-indigo-600 mb-1.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </span>
                                        <p>1:34:23 Minutes</p>
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-indigo-600 mb-1.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </span>
                                        <p>3 Parts</p>
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-indigo-600 mb-1.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                                />
                                            </svg>
                                        </span>
                                        <p>Vanilla JS</p>
                                    </div>
                                      <Link href={"/courses/hello"}>
                                  
                                       <ClickButton style={"mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"} data={"Buy Lesson"}/> 
                                    
                                     </Link>
                                </div>
                            </div>
                       
                  
                        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                            <h3 className="mb-3 text-xl font-bold text-indigo-600">
                                Intermediate
                            </h3>
                            <div className="relative">
                                <img
                                    className="w-full rounded-xl"
                                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                                    alt="Colors"
                                />
                                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                                    $12
                                </p>
                                <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
                                    %20 Discount
                                </p>
                            </div>
                            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                                Write a Gatsby plugin using Typescript
                            </h1>
                            <div className="my-4">
                                <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-indigo-600 mb-1.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                    <p>1:34:23 Minutes</p>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-indigo-600 mb-1.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </span>
                                    <p>3 Parts</p>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-indigo-600 mb-1.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            />
                                        </svg>
                                    </span>
                                    <p>TypeScript</p>
                                </div>
                                      <Link href={"/courses/WebDevelopment"}>
                            
                                <ClickButton style={"mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"} data={"Start Watching Now"}/> 
                           
                                   </Link>
                            </div>
                        </div>
                     
                        
                        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                            <h3 className="mb-3 text-xl font-bold text-indigo-600">
                                Beginner Friendly
                            </h3>
                            <div className="relative">
                                <img
                                    className="w-full rounded-xl"
                                    src="https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                                    alt="Colors"
                                />
                                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                                    $50
                                </p>
                            </div>
                            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                                Advanced React Native for Sustainability
                            </h1>
                            <div className="my-4">
                                <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-indigo-600 mb-1.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                    <p>1:34:23 Minutes</p>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-indigo-600 mb-1.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </span>
                                    <p>3 Parts</p>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-indigo-600 mb-1.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            />
                                        </svg>
                                    </span>
                                    <p>Vanilla JS</p>
                                </div>
                                  <Link href={"/courses/WebDevelopment"}>
                                
                                    <ClickButton style={"mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"} data={"Buy Lesson"}/>
                                
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
