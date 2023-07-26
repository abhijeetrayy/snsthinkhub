"use client";
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
      <div className="  ">{children}</div>
    </>
  );
}
