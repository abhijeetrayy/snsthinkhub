"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function getInternData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const find = async () => {
      try {
        const res = await fetch("/api/getInternData");
        const response = await res.json();
        console.log(response);
        setData(response?.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    find();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col">
        <div>Internship List</div>
        <div className="flex flex-row gap-6  justify-around">
          <div>Internship Id</div>
          <div>Internship Name</div>
        </div>
        <hr className="border-1 border-gray-700 my-2" />
        {data
          ? data.map((item, index) => (
              <div className="flex flex-row gap-6 justify-around">
                <Link
                  className=""
                  href={`/admin/internships/${item.internshipId}`}
                  key={item._id}
                >
                  <span>
                    {index + 1} {"->"}
                  </span>{" "}
                  <span className="underline pointer px-4 py-1 rounded-md bg-indigo-200 hover:bg-indigo-300">
                    {item.internshipId}
                  </span>
                </Link>
                <span>web devlopment</span>
              </div>
            ))
          : "wait"}
      </div>
    </>
  );
}
