import React from "react";
import Form from "../../../../components/form";
import Link from "next/link";

import GetCourseData from "../../../../components/getCourseData";
export default function page() {
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        <div>
          <Link
            className="px-5 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-md"
            href={"/admin/courses/create"}
          >
            Create a Course
          </Link>
        </div>
        <GetCourseData />
      </div>
    </div>
  );
}
