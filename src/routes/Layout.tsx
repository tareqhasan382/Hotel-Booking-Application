import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="bg-[#f4f5f6] h-auto overflow-hidden">
      <div className="shadow fixed bg-[#0b0d1c] text-white  top-0 z-50 w-full ">
        <Navbar />
      </div>

      <div className="mx-auto pt-20 ">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
