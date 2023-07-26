import "../../css/tailwind.css";
import Sidebar from "../../components/admin/sidebar";
export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div className="flex w-full ">
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
      </body>
    </html>
  );
}
