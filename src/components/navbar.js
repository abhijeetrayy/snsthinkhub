"use client";
import Link from "next/link";

import Image from "next/image";
import Logo from "../public/img/logo.svg";
import { Disclosure } from "@headlessui/react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession()
  const navigation = [
    { name: "Home", url: "/" },
    { name: "Course", url: "/courses" },
    { name: "Internship", url: "/internship" },
    { name: "About", url: "/about" },
  ];

  return (
    <div className="z-50 w-full shadow-md">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto  lg:justify-between lg:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
                    <span>
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="44" height="44" rx="6" fill="#4F46E5" />
                        <path
                          d="M31.3662 34H25.7427L17.4282 19.4014V34H11.7725V10.5391H17.4282L25.7266 25.1377V10.5391H31.3662V34Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span>SnSThinkHub</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none da"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

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
            href="/"
            className="px-4 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Get Started
          </Link>
          {session ?

            <Link
              href="/"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              <img src={session?.user?.image} className="mr-2 w-8 rounded-full inline-block" /><span>{session?.user?.name}</span>
            </Link> : <Link
              href="/api/auth/signin"
              className="px-4 py-2 text-white content-center bg-indigo-600 rounded-md md:ml-5"
            >
              Log In
            </Link>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
