
import React from 'react'
import Link from "next/link"


export default function programBuy() {
   
    return (

        < div className="" >
            <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
                <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">We offer a variety of programs for students at all levels.</h2>
                </div>
                <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
                    <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                        <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div className="relative p-6 space-y-6 lg:p-8">
                            <h3 className="text-3xl text-gray-700 font-semibold text-center">Business Only</h3>
                            <div>
                                <div className="relative flex justify-around">
                                    <div className="flex items-end">
                                        <span className="text-8xl text-gray-800 font-bold leading-0">35</span>
                                        <div className="pb-2">
                                            <span className="block text-2xl text-gray-700 font-bold">%</span>
                                            <span className="block text-xl  text-indigo-600 font-bold">Off</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul role="list" className="w-max space-y-4 py-6 m-auto text-gray-600">
                                <li className="space-x-2">
                                    <span className=" text-indigo-600 font-semibold">&#10003;</span>
                                    <span>First premium advantage</span>
                                </li>
                                <li className="space-x-2">
                                    <span className=" text-indigo-600 font-semibold">&#10003;</span>
                                    <span>Second advantage weekly</span>
                                </li>
                                <li className="space-x-2">
                                    <span className=" text-indigo-600 font-semibold">&#10003;</span>
                                    <span>Third advantage donate to project</span>
                                </li>
                            </ul>
                            
                            <div className='w-full flex justify-center'>

                                {/* Open the modal using ID.showModal() method */}
                                <Link href={"/contact-us"} className="btn px-3 py-2 border border-gray-200 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white">Contact Us</Link>
                                


                            </div>

                        </div>
                    </div>

                    <div className="relative group md:w-6/12 lg:w-7/12">
                        <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"></div>
                        <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                            <ul role="list" className="space-y-4 py-6 text-gray-600">
                                <li className="space-x-2">
                                    <span className=" text-indigo-600 font-semibold">&#10003;</span>
                                    <span>First premium advantage</span>
                                </li>
                                <li className="space-x-2">
                                    <span className=" text-indigo-600 font-semibold">&#10003;</span>
                                    <span>Second advantage weekly</span>
                                </li>
                                <li className="space-x-2">
                                    <span className=" text-indigo-600 font-semibold">&#10003;</span>
                                    <span>Third advantage donate to project</span>
                                </li>
                                <li className="space-x-2">
                                    <span className=" text-indigo-600 font-semibold">&#10003;</span>
                                    <span>Fourth, access to all components weekly</span>
                                </li>
                            </ul>
                            <p className="text-gray-700">Team can be any size, and you can add or switch members as needed. Companies using our platform include:</p>
                            <div className="mt-6 flex justify-between gap-6">
                                <img className="w-16 lg:w-24" src="https://tailus.io/sources/blocks/organization/preview/images/clients/airbnb.svg" loading="lazy" alt="airbnb" />
                                <img className="w-8 lg:w-16" src="https://tailus.io/sources/blocks/organization/preview/images/clients/bissell.svg" loading="lazy" alt="bissell" />
                                <img className="w-6 lg:w-12" src="https://tailus.io/sources/blocks/organization/preview/images/clients/ge.svg" loading="lazy" alt="ge" />
                                <img className="w-20 lg:w-28" src="https://tailus.io/sources/blocks/organization/preview/images/clients/microsoft.svg" loading="lazy" alt="microsoft" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
