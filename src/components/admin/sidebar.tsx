"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function sidebar() {
  const { data: session, status } = useSession();
  return (
    <div className="sticky left-0 top-0  p-3 flex flex-col h-screen border-r-2 gap-3 border-gray-500 w-52 items-center justify-between">
      <div className="flex flex-col gap-1">
        <Link href={"/home"} className="my-4 underline">
          SnSThinkHub
        </Link>
        <Link
          className="px-8 py-3 bg-indigo-100 rounded-md border-1 border-gray-400 hover:bg-indigo-50"
          href={"/home/admin"}
        >
          Dashboard
        </Link>
        <Link
          className="px-8 py-3 bg-indigo-100 rounded-md border-1 border-gray-400 hover:bg-indigo-50"
          href={"/home/admin/internships"}
        >
          Internship
        </Link>
        <Link
          className="px-8 py-3 bg-indigo-100 rounded-md border-1 border-gray-400 hover:bg-indigo-50"
          href={"/home/admin/courses"}
        >
          Course
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span>{session?.user?.name}</span>
          <span>{session?.user?.email}</span>
        </div>
        <Link
          href={"/api/auth/signout"}
          className="px-8 py-3 text-white bg-gray-700 rounded-md border-1 border-gray-400 hover:bg-gray-600"
        >
          LogOut
        </Link>
      </div>
    </div>
  );
}

export default sidebar;
