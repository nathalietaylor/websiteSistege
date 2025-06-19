import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="bg-dark text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-6 md:px-20 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
