import "../../css/tailwind.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { Toaster } from "react-hot-toast";
import AuthProvider from "../../context/sessionProvider";

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={+true}
        />
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
            <div className="flex-grow ">{children}</div>
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
