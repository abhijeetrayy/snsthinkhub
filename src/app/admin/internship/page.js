import React from "react";
import Form from "../../../../components/form";
import CardPageVisits from "../../../../components/Admin/Cards/CardPageVisits";
import GetInternData from "../../../../components/getInternData";
export default function page() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col gap-1 mt-4">
        <sapn className="text-3xl  font-bold text-white underline decoration-dotted">
          Manage Internship
        </sapn>
        <br />

        <GetInternData />
      </div>
    </div>
  );
}
