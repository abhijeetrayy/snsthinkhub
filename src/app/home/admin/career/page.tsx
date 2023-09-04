import React from "react";
import Form from "../../../../components/form";
import Link from "next/link";

import GetCareerData from "../../../../components/getCareerData";
export default function page() {
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        <div>
          <div
            className="px-5 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-md"
            // href={"/home/admin/courses/create"}
          >
            Create a Career - disabled
          </div>
        </div>
        <GetCareerData />
      </div>
    </div>
  );
}
