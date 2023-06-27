"use client";
import Link from "next/link";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useSession } from "next-auth/react";
import Image from "next/image";
import Logosvg from "../public/logosnss.png"

function Navbar() {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
  const { data: session } = useSession();
  console.log(session);
  const navigation = [
    { name: "Home", url: "/" },
    { name: "Course", url: "/courses" },
    { name: "Internship", url: "/internship" },
    { name: "About", url: "/about" },
    { name: "Program", url: "/program"},
    { name: "Success Story", url: "/success-story"},
  ];

  return (
    <div className="z-50 w-full shadow-md">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto  lg:justify-between lg:px-0">
        {/* Logo  */}

        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <span className="flex  flex-row space-x-2 text-2xl font-medium text-indigo-500">
              {/* <Image
                      width={44}
                      height={44}
                      src={Logo}
                    /> */}

              <span>SnSThinkHub</span>
            </span>
          </Link>
          <button className='flex px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-500 rounded-lg lg:hidden' onClick={() => setOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg></button>
          <Transition.Root show={open} as={Fragment} className="lg:hidden z-50">
            <Dialog as="div" className="relative" initialFocus={cancelButtonRef} onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed h-screen w-screen bg-indigo-700 inset-0  overflow-y-auto ">
                <div className="flex justify-start p-4 text-center items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="flex  w-screen h-screen flex-col justify-around">
                      <div className="px-4 pb-4 pt-5   sm:p-6 sm:pb-4 h-1/2 w-full">
                        <div className=" flex flex-col gap-2 h-full w-full">

                          <div className="flex flex-col gap-8 mt-3 sm:ml-4 sm:mt-0 text-left w-full">
                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                              <div className="flex justify-between">

                                <Link href="/">
                                  <span className="flex  flex-row space-x-2 text-2xl font-medium text-white">


                                    <span>SnSThinkHub</span>
                                  </span>
                                </Link>
                                <div>
                                  <button className='flex px-4 py-2 bg-white text-indigo-700 hover:bg-gray-200 rounded-lg lg:hidden' onClick={() => setOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                  </svg></button>
                                </div>
                              </div>
                            </Dialog.Title>
                            <div className="flex justify-between gap-6 h-full w-full ">
                              <div className="flex flex-col gap-6 w-full">

                                {navigation.map((item, index) => (

                                  <Link
                                    key={index}
                                    href={item.url}
                                    onClick={() => setOpen(false)}
                                    className=" px-4 py-2 -ml-4  bg-white text-black rounded-md hover:bg-indigo-400 hover:text-white focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none w-52"
                                  >
                                    {item.name}
                                  </Link>

                                ))}

                              </div>
                              <Image className="w-64 h-fit text-white bg-cover" src={Logosvg} />

                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-6  sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                        >
                          <Link
                            href="/contact-us"
                            className="w-full px-6 py-2 text-center bg-white text-black r hover:bg-indigo-400 hover:text-white rounded-md "
                          >
                            Contact Us
                          </Link>
                        </button>
                       
                      </div>

                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>







        </div>


        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.url}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex items-center nav__item ">
          <Link
            href="/contact-us"
            className="px-4 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Contact Us
          </Link>
        
        </div>
      </nav >
    </div >
  );
};

export default Navbar;
