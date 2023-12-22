"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function page() {
  const [formDataTeam, setFormData] = useState(null);
  useEffect(() => {
    // Fetch form data with image filename from the server
    const fetchFormData = async () => {
      const response = await fetch("/api/getTeam");
      const data = await response.json();
      console.log(data);
      setFormData(data?.formData);
      console.log(formDataTeam);
    };

    fetchFormData();
  }, []);
  return (
    <div>
      <div className="">
        <div className="flex flex-col gap-10">
          <div>
            <Link
              className="px-5 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-md"
              href={"/home/admin/team/create"}
            >
              Create
            </Link>
          </div>
          <div>Teams</div>
          <div className="flex flex-col gap-10">
            {formDataTeam ? (
              formDataTeam.map((item, index) => (
                <div key={index}>
                  {/* Display text data */}
                  <p>Name: {item.Name}</p>
                  <p>Designation: {item.Designation}</p>
                  <p>Quote: {item.Quote}</p>

                  {/* Display the image */}
                  {item.image && (
                    <img
                      src={`/api/getImage/?filename=${item.image.filename}`}
                      alt="Uploaded Image"
                      width={500}
                      height={300}
                    />
                  )}
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
            {/* {formData ? (
                
              ) : (
                <p>Loading...</p>
              )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
