

import React from "react";


import CardPageVisits from "../../components/Admin/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/Admin/Cards/CardSocialTraffic.js";

// layout for page



export default function Dashboard() {
    return (
        <>

            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardPageVisits title={"User Registration"} />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardSocialTraffic />
                </div>
            </div>
        </>
    );
}