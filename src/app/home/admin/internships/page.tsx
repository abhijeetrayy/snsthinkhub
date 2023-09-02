import React from "react";
import Form from "../../../../components/form";
import Link from "next/link";

import GetInternData from "../../../../components/getInternData";
export default function page() {
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        <div>
          <Link
            className="px-5 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-md"
            href={"/home/admin/internships/create"}
          >
            Create an Intenship
          </Link>
        </div>

        <GetInternData />
      </div>
    </div>
  );
}
