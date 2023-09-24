"use client";
import "../../css/tailwind.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { Toaster } from "react-hot-toast";
import AuthProvider from "../../context/sessionProvider";

import { usePathname } from "next/navigation";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const url = usePathname();
  if (url?.startsWith("/home/admin")) {
    return (
      <html>
        <body>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <div className="w-full flex flex-col min-h-screen justify-center ">
            <div className="z-50 sticky top-0 bg-white w-full">
              <Navbar />
            </div>
            <div className=" flex-grow">{children}</div>
            <div className="w-full flex justify-center">
              <Footer />
            </div>
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
