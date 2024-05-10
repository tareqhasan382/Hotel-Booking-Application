import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import CartSlider from "./components/CartSlider";
function App() {
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
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative overflow-hidden ">
      <Hero />

      <div className=" overflow-hidden lg:px-20 px-2 ">
        <CartSlider />
      </div>
      <Testimonials />
      {/* <Footer/> || data-aos="zoom-out-left" ||  data-aos="zoom-out-right" */}
    </div>
  );
}

export default App;
