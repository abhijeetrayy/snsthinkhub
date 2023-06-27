'use client'


import { useSession } from "next-auth/react";
import Admin from "../../components/Admin/AdminLayout";
import Link from "next/link";




export default function Layout({ children }) {
    const { data: session, status } = useSession()
    if (status == "loading") {
        return (<>Loading.. please wait</>)
    }
    if (session?.user?.email === "abhijeet11ray@gmail.com") {
        return (
            <Admin>

                {children}
            </Admin>
        )
    }
    else {
        return (
            <>

                <div className="flex items-center justify-center h-screen w-screen flex-col gap-3">
                    <Link className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md" href={"/"} >Go to Home Page</Link>
                    Access denied
                </div>
            </>
        );

    }






}
