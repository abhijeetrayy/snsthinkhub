"use client";
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
        const res = await fetch("/api/getInternUsers", {
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
      <h1>Internship #{url} - Users List</h1>
      {data
        ? data.map((item: any, index) => (
            <div key={index} className="flex flex-row gap-6 justify-around">
              <div className="">{item?.Name}</div>
              <span>{item?.Email}</span>
            </div>
          ))
        : "wait"}
    </>
  );
}

export default page;
