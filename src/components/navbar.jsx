"use client";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Logosvg from "../public/logosnss.png";
import Logo from "../public/img/logo.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  const { data: session } = useSession();

  const navigation = [
    { name: "Home", url: "/home" },
    { name: "Course", url: "/home/courses" },
    { name: "Internship", url: "/home/internship" },
    // { name: "Program", url: "/home/program" },
    // { name: "Success Story", url: "/home/success-story" },
    { name: "Team", url: "/home/team" },
    { name: "About", url: "/home/about" },
    // { name: "Career", url: "/home/career" },
    { name: "Gallery", url: "/home/gallery" },
  ];

  return (
    <div className=" z-50 w-full shadow-md flex justify-center">
      <nav className="container relative flex flex-wrap items-center px-6 justify-around md:justify-between py-3 md:px-2  mx-auto bg-white max-w-6xl">
        {/* Logo  */}

        <div className="flex flex-wrap items-start justify-between w-full  lg:w-32">
          <Link href="/">
            <Image
              className="w-10 h-10"
              alt=""
              width={100}
              height={100}
              src={Logo}
            />
            {/* <span className="flex   flex-row space-x-2 text-2xl font-medium text-indigo-500">
              

              <span>SnSThinkHub</span>
            </span> */}
          </Link>
          <button
            className="flex px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-400 rounded-lg lg:hidden"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <Transition.Root show={open} as={Fragment} className="lg:hidden z-50">
            <Dialog
              as="div"
              className="relative"
              initialFocus={cancelButtonRef}
              onClose={setOpen}
            >
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

              <div className="fixed h-screen w-screen bg-white inset-0  overflow-y-auto ">
                <div className="flex justify-start p-4 text-center items-start sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="flex  w-screen h-screen flex-col justify-around items-start">
                      <div className="mt-9 px-4 pb-4  sm:p-6 sm:pb-4  w-full ">
                        <div className=" flex flex-col gap-2 h-screen w-full">
                          <div className="flex flex-col gap-8 mt-3 sm:ml-4 sm:mt-0 text-left w-full">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900 "
                            >
                              <div className="flex justify-between items-start sm:pr-3">
                                <Link href="/" onClick={() => setOpen(false)}>
                                  <Image
                                    className="w-16 h-auto"
                                    alt=""
                                    width={50}
                                    height={50}
                                    src={Logo}
                                  />
                                  {/* <span className="flex  flex-row space-x-2 text-2xl font-medium text-white">
                                    <span>SnSThinkHub</span>
                                  </span> */}
                                </Link>
                                <div>
                                  <button
                                    className="flex px-4 py-2 bg-inidigo-500 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg lg:hidden"
                                    onClick={() => setOpen(false)}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </Dialog.Title>
                            <div className="flex justify-between gap-6 h-full w-full">
                              <div className="flex flex-col gap-6 w-full">
                                {navigation.map((item, index) => (
                                  <Link
                                    key={index}
                                    href={item.url}
                                    onClick={() => setOpen(false)}
                                    className=" px-4 py-2 -ml-4  bg-white text-gray-700 rounded-md border border-indigo-600 hover:border-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none w-52"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                                {!session ? (
                                  <button
                                    onClick={signIn}
                                    className=" px-4 py-2 -ml-4  text-white bg-indigo-500 rounded-md hover:bg-indigo-400 hover:text-white focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none w-52"
                                  >
                                    signIn
                                  </button>
                                ) : (
                                  <Link
                                    onClick={() => setOpen(false)}
                                    href={"/home/profile"}
                                    className=" px-4 py-2 -ml-4  text-white bg-indigo-500 rounded-md hover:bg-indigo-400 hover:text-white focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none w-52"
                                  >
                                    {session?.user?.name.substring(0, 8)}...
                                  </Link>
                                )}
                                <Link
                                  onClick={() => setOpen(false)}
                                  href={"/home/program"}
                                  className=" px-4 py-2 -ml-4  text-white bg-indigo-500 rounded-md hover:bg-indigo-400 hover:text-white focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none w-52"
                                >
                                  For Universities
                                </Link>
                              </div>
                              <Image
                                alt=""
                                className="w-64 h-fit text-indigo-400 bg-indigo-500 rounded-lg bg-cover"
                                src={Logosvg}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center lg:justify-center w-fit">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.url}
                  className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden  lg:flex items-center nav__item ">
          {!session ? (
            <button
              onClick={signIn}
              className="px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-600 rounded-md md:ml-5"
            >
              signIn
            </button>
          ) : (
            <Link
              href={"/home/profile"}
              className="px-4 py-2 text-indigo-500 hover:text-gray-800 border  border-indigo-500 hover:border-gray-900 duration-300  rounded-md md:ml-5"
            >
              {session?.user?.name.substring(0, 8)}...
            </Link>
          )}
          <Link
            onClick={() => setOpen(false)}
            href={"/home/program"}
            className="px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-600 rounded-md md:ml-5"
          >
            For Universities
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
