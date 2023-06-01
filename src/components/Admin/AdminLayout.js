'use client'
import React from "react";

// components

import AdminNavbar from "./AdminNavbar.js";
import Sidebar from "./Sidebar/Sidebar.js";
import HeaderStats from "./Headers/HeaderStats.js";
import FooterAdmin from "./FooterAdmin.js";

export default function Admin({ children }) {
    return (
        <>
            <Sidebar />
            <div className=" relative md:ml-64 bg-gray-100 ">
                <AdminNavbar />
                {/* Header */}
                <HeaderStats />
                <div className="flex flex-col px-4 md:px-10 mx-auto w-full -m-24 min-h-screen">
                    <div className="flex-grow z-10">

                        {children}
                    </div>
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}