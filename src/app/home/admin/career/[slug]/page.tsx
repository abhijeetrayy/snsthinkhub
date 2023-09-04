"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const [data, setData] = useState([]);
  const pathname = usePathname();
  const url = pathname?.split("/")[4];

  useEffect(() => {
    const find = async () => {
      //   const res = await fetch("/api/getCourseData");
      try {
        const url = pathname?.split("/")[4];
        console.log(url);
        const res = await fetch("/api/getCareerUsers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });
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
      <h1>Career #{url} - Users List</h1>
      <div className="flex flex-col gap-3">
        {data
          ? data.map((item: any, index) => (
              <div
                key={index}
                className="grid grid-cols-2 w-full justify-around"
              >
                <Link
                  href={`/home/admin/career/${url}/${item.Email}`}
                  className=" col-span-1 py-1 px-1 text-gray-800 bg-slate-400 underline hover:bg-slate-300 w-fit rounded-lg"
                >
                  {item?.Name}
                </Link>
                <div className="col-span-1">{item?.Email}</div>
              </div>
            ))
          : "wait"}
      </div>
    </>
  );
}

export default page;
