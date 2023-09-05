"use client";
import "../../../css/tailwind.css";
import Sidebar from "../../../components/admin/sidebar";
import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Layout({ children }) {
  const { data: session, status } = useSession();
  if (status == "unauthenticated") {
    return (
      <>
        Click here to signin:{" "}
        <button className=" underline text-blue-900" onClick={signIn}>
          {" "}
          signin
        </button>
      </>
    );
  }
  if (session) {
    if (
      session.user.email == "abhijeet11ray@gmail.com" ||
      session.user.email == "harshitmunjal769@gmail.com"
    ) {
      return (
        <html>
          <body>
            <>
              <div className="flex md:hidden">Switch to Desktop Only</div>
              <div className="hidden md:flex w-full ">
                <div className="flex-none ">
                  <Sidebar />
                </div>
                <div className="grow">
                  <nav className="z-10 sticky top-0 bg-white w-full flex justify-center shadow-md">
                    <div className="py-3 ">
                      <h1>SandSThinkHub Admin</h1>
                    </div>
                  </nav>
                  <div className="p-3">{children}</div>
                </div>
              </div>
            </>
          </body>
        </html>
      );
    } else redirect("/404");
  }
}
