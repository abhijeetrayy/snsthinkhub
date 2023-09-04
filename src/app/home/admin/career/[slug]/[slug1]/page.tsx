"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
interface DataObject {
  Name: String;
  Email: String;
  Phone: String;
  Linkedin: String;
  Github: String;
  about: String;
  Id: String;
}

function page() {
  const [data, setData] = useState<DataObject[]>([]);
  const pathname = usePathname();
  const url = pathname?.split("/")[5];
  const url1 = pathname?.split("/")[4];

  useEffect(() => {
    const find = async () => {
      //   const res = await fetch("/api/getCourseData");
      try {
        const url = pathname?.split("/")[5];
        const url1 = pathname?.split("/")[4];

        const link = {
          url,
          url1,
        };
        const res = await fetch("/api/getCareerUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ link }),
        });
        const response = await res.json();
        console.log(response);
        setData(response?.data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    find();
  }, []);
  return (
    <>
      <h1>Career #{url1} - User Details</h1>
      {data
        ? data.map((item: any, index) => (
            <div key={index} className="grid grid-cols-2 w-full justify-around">
              <div className=" col-span-1">{item?.Name}</div>
              <div className="col-span-1 flex flex-col  ">
                <span> {item?.Email}</span>
                <span> {item?.Phone}</span>
                <span> {item?.Linkedin}</span>
                <span> {item?.Github}</span>
                <span> {item?.about}</span>
              </div>
            </div>
          ))
        : "wait"}
    </>
  );
}

export default page;
