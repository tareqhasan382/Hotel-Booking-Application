import Marquee from "react-fast-marquee";
import { MdArrowForward } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CartSlider: React.FC = () => {
  const row1 = [
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  // data-aos="fade-up"
  return (
    <div className=" py-20 flex flex-col gap-10 ">
      <Marquee
        data-aos="fade-up"
        className=" gap-4 rounded-md "
        direction="left"
        speed={30}
      >
        <div className="   flex flex-row items-center gap-4 bg-[#e0e3e6] rounded-xl  ">
          {row1.map((it, index) => (
            <div
              key={index}
              className="relative rounded-xl flex items-center justify-center"
            >
              <img
                className="h-[300px] w-[200px] object-cover rounded-xl"
                src={it}
                alt="logo"
              />
              <button className="absolute top-56 flex items-center justify-center rounded-md z-10 text-white bg-gradient-to-r bg-black from-gray-500 to-black hover:scale-105 duration-200 py-2 px-4">
                Customize <MdArrowForward size={30} className="pl-2" />
              </button>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee
        data-aos="fade-up"
        className=" gap-4 rounded-md "
        direction="right"
        speed={30}
      >
        <div className="   flex flex-row items-center gap-4 bg-[#e0e3e6] rounded-xl  ">
          {row1.map((it, index) => (
            <div
              key={index}
              className="relative rounded-xl flex items-center justify-center"
            >
              <img
                className="h-[300px] w-[200px] object-cover rounded-xl"
                src={it}
                alt="logo"
              />

              <button className="absolute top-56 flex items-center justify-center rounded-md z-10 text-white bg-gradient-to-r bg-black from-gray-500 to-black hover:scale-105 duration-200 py-2 px-4">
                Customize <MdArrowForward size={30} className="pl-2" />
              </button>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CartSlider;

//CartSlider
