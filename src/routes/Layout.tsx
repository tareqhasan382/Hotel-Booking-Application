import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Layout = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 800,
      easing: "ease-in-sine",
      delay: 200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-[#f4f5f6] h-auto overflow-hidden">
      <div className="shadow fixed bg-[#e0e3e6] top-0 z-50 w-full ">
        <Navbar />
      </div>

      <div data-aos="zoom-out-left" className="mx-auto pt-20 ">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
    // <div
    //   data-aos="zoom-out-right"
    //   className=" bg-[#f4f5f6] flex flex-col h-auto overflow-hidden "
    // >
    //   <div className=" shadow fixed bg-[#e0e3e6] top-0 z-50 ">
    //     <Navbar />
    //   </div>

    //   <div data-aos="zoom-out-left" className=" mx-auto ">
    //     <Outlet></Outlet>
    //   </div>
    //   <Footer />
    // </div>
  );
};

export default Layout;
