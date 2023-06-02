"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Bars } from "react-loader-spinner";

export default function ProfilePage() {
    const { data: session, status } = useSession();
    if (status == "loading") {
        return (
            <div className="h-screen w-screen flex justify-center items-center">
                <Bars
                    type="Puff"
                    color="gray"
                    height={100}
                    width={100}
                    timeout={3000}
                />

            </div>
        )
    }
    if (!session) {
        return (
            <div className="h-screen w-screen flex justify-center items-center flex-col text-indigo-500">
                <Bars
                    type="Puff"
                    color="gray"
                    height={100}
                    width={100}
                    timeout={3000}
                />
                You are loged Out, Please check
            </div>
        );
    } else {
        return (
            <div className="w-full flex justify-center p-6">
                <div className=" max-w-5xl flex flex-col gap-10 lg:flex-row justify-between">
                    <div className="lg:w-[320px] border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-row gap-6 lg:flex-col h-full">
                            <div className="flex flex-col gap-2">
                                <span className="text-2xl font-medium">{session?.user?.name}</span>
                                <span>{session?.user?.email}</span>
                            </div>
                            <hr />
                            <div className="flex  justify-between h-full flex-col gap-2">

                                <ul className="flex flex-col gap-2 p-0">
                                    <li className="px-3 py-2 border-2 border-indigo-700 rounded-lg cursor-pointer w-24">
                                        Profile
                                    </li>
                                    <li className="px-3 py-2 border-2 border-gray-200 rounded-lg  w-24 ">
                                        Purchases
                                    </li>
                                    <li className="px-3 py-2 border-2 border-gray-200 rounded-lg w-24 ">
                                        Internship
                                    </li>
                                </ul>
                                <div>
                                    <button className="px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold " onClick={signOut}>
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full md:w-[500px]">
                        <div className=" flex flex-col gap-9 ">
                            <div className="flex flex-col ">
                                <label>Nmae</label>
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
                            <div className="flex flex-col gap-2 w-full">
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
                            </div>
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
