"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function getCourseData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const find = async () => {
      //   const res = await fetch("/api/getCourseData");
      try {
        const res = await fetch("/api/getCourseData");
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
        <div>Courses List</div>
        <div className="flex flex-row gap-6  justify-around">
          <div>Course Id</div>
          <div>Course Name</div>
        </div>
        <hr className="border-1 border-gray-700 my-2" />
        <div className="flex flex-col gap-2">
          {data
            ? data.map((item, index) => (
                <div className="flex flex-row gap-6 justify-around">
                  <Link
                    className=""
                    href={`/admin/courses/${item.CourseId}`}
                    key={item._id}
                  >
                    <span>
                      {index + 1} {"->"}
                    </span>{" "}
                    <span className="underline pointer px-4 py-1 rounded-md bg-indigo-200 hover:bg-indigo-300">
                      {item.CourseId}
                    </span>
                  </Link>
                  <span>web devlopment</span>
                </div>
              ))
            : "wait"}
        </div>
      </div>
    </>
  );
}
