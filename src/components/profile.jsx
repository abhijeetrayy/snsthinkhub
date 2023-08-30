"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FiCloudRain } from "react-icons/fi";
import { signIn } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  if (status == "loading") {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="m-10 text-6xl animate-pulse text-gray-700 flex justify-center items-center">
          <FiCloudRain />
        </div>
      </div>
    );
  }
  if (!session) {
    return (
      <div className="h-screen w-screen flex justify-center items-center flex-col text-indigo-500">
        <div className="text-6xl animate-pulse text-gray-700 flex justify-center items-center m-10">
          <FiCloudRain />
        </div>
        You are loged Out, Please check
        <button
          className="p-2  rounded-md text-white bg-indigo-600"
          onClick={signIn}
        >
          Login
        </button>
      </div>
    );
  } else {
    return (
      <div className="w-full flex justify-center p-6">
        <div className=" w-full max-w-5xl flex flex-col  md:flex-row gap-10 lg:flex-row min-h-screen">
          <div className="w-full max-w-xs border border-gray-200 rounded-lg p-4">
            <div className="flex flex-col gap-6 h-full">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-medium">
                  {session?.user?.name}
                </span>
                <span>{session?.user?.email}</span>
              </div>
              <hr className="border" />
              <div className="flex  justify-between h-full flex-col gap-2">
                {/* <ul className="flex flex-col gap-2 p-0">
                  <li className="px-3 py-2 border-2 border-indigo-700 rounded-lg cursor-pointer w-24">
                    Profile
                  </li>
                  <li className="px-3 py-2 border-2 border-gray-200 rounded-lg  w-24 ">
                    Purchases
                  </li>
                  <li className="px-3 py-2 border-2 border-gray-200 rounded-lg w-24 ">
                    Internship
                  </li>
                </ul> */}
                <div>
                  <button
                    className="px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold "
                    onClick={signOut}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className=" flex flex-col gap-9 ">
              <div className="flex flex-col ">
                <label>Name</label>
                <input
                  className="rounded-lg border border-gray-200 ring-0"
                  type="text"
                  value={session?.user?.name}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Email</label>
                <input
                  className="rounded-lg border border-gray-200 ring-0"
                  type="email"
                  value={session?.user?.email}
                />
              </div>
              {/* <div className="flex flex-col gap-2 w-full">
                <label>Univerisity</label>
                <input
                  className="rounded-lg border border-gray-200 ring-0"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Course/Degree</label>
                <input
                  className="rounded-lg border border-gray-200 ring-0"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Duration of Course/Degree</label>
                <input
                  className="rounded-lg border border-gray-200 ring-0"
                  type="text"
                  placeholder="2030-2035"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Phone</label>
                <input
                  className="rounded-lg border border-gray-200 ring-0"
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Country</label>
                <input
                  className="rounded-lg border border-gray-200 ring-0"
                  type="text"
                  value={"India"}
                />
              </div> */}
              <div>
                <button className="px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
