"use client";
import "../css/tailwind.css";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";
import Footer from "../components/footer";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  const pathname = usePathname();

  if (
    pathname !== "/admin" &&
    pathname !== "/admin/internship" &&
    pathname !== "/admin/program"
  ) {
    return (
      <html>
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <SessionProvider>
            <div className="w-full flex flex-col min-h-screen justify-center ">
              <div className="z-50 sticky top-0 bg-white w-full">
                <Navbar />
              </div>
              <div className=" flex-grow ">{children}</div>
              <div className="w-full flex justify-center">
                <Footer />
              </div>
            </div>
          </SessionProvider>
          <Toaster />
        </body>
      </html>
    );
  }
  return (
    <html>
      <head></head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
