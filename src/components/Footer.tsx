// import Banner from "../assets/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// const BannerImg = {
//   backgroundImage: `url(${Banner})`,
//   backgroundPosition: "bottom",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      //   style={BannerImg}
      className="text-black flex flex-wrap items-center justify-center  "
    >
      <div data-aos="zoom-in" className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3  pt-5">
          {/* company details */}
          <div className="py-8 px-4 lg:ml-10 ">
            {/* <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy font-semibold text-2xl
            </h1> */}
            <Link to="/" className=" text-heading2-bold">
              <h1 className=" text-4xl gradient-text text-transparent font-extrabold  ">
                Hotel Booking
              </h1>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div className="px-4 pb-5 w-[300px]   ">
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram size={20} className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook size={20} className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin size={20} className="text-3xl" />
                </a>
              </div>
              <div className=" mt-6 block  ">
                <div className=" flex flex-row items-center gap-3">
                  <FaLocationArrow size={20} />
                  <p>Dhaka, Bangladesh</p>
                </div>
                <div className="flex flex-row items-center gap-3 mt-3">
                  <FaMobileAlt size={20} />
                  <p>+88 01989342794</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center flex flex-row items-center justify-center text-black ">
        <span className=" px-1 ">Copyright &copy; {currentYear} ||</span>
        <span>Developed by Tareq</span>
      </div>
      <div className=" lg:h-32 h-24 w-full "></div>
    </div>
  );
};

export default Footer;
