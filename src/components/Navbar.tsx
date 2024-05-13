import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const session = null;
  const [showProfile, setShowProfile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  // const cart = useCart();
  useEffect(() => {}, []);
  return (
    <div className="max-w-[1280px] mx-auto overflow-x-hidden">
      <div className=" px-5 flex items-center justify-between py-5 relative">
        <div className="flex items-center justify-center md:space-x-10 lg:space-x-20 ">
          <div className="font-semibold text-2xl">
            <Link to="/">
              <h1 className=" gradient-text text-transparent text-2xl font-bold ">
                Hotel Booking
              </h1>
            </Link>
          </div>
          <nav className=" max-md:hidden flex flex-row items-center  ">
            <ul className="flex items-center space-x-3  font-semibold text-[15px]">
              <li>
                <Link
                  to="/"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Orders
                </Link>
              </li>

              {session ? (
                <li>
                  <span className=" cursor-pointer hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full">
                    SignOut
                  </span>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className=" cursor-pointer hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full"
                  >
                    Login
                  </Link>
                </li>
              )}

              {/* {session?.user?.role === "admin" && (
                <li>
                  <Link
                    href="/admin"
                    className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                  >
                    Dashboard
                  </Link>
                </li>
              )} */}
            </ul>
          </nav>
        </div>

        <div className=" flex items-center space-x-2">
          <div className=" cursor-pointer  ">
            <Link to={session ? "/wishlist" : "/wishlist"}>
              <Heart fill="red" color="#f40b0b" />
            </Link>
          </div>
          <Link to="/cart">
            <div className=" flex flex-col top-2 cursor-pointer  ">
              <div className=" absolute top-3 px-2  w-6 ">
                {/* {cart?.cartItems?.length} */}0
              </div>
              <div>
                <ShoppingCart />
              </div>
            </div>
          </Link>

          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative cursor-pointer"
          ></div>
          {/* <ToggleTheme /> */}

          <span
            onClick={() => setShowNav(!showNav)}
            className="p-[9px] bg-black rounded-md md:hidden"
          >
            {showNav ? (
              <AiOutlineClose
                size={30}
                className="transition ease-in duration-150"
              />
            ) : (
              <CiMenuBurger
                size={30}
                className="transition ease-in duration-150"
              />
            )}
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${showNav ? "block rounded-lg" : "hidden"}`}
        style={{ maxWidth: "100vw", overflowX: "hidden" }}
      >
        <ul className=" flex flex-col text-[15px] py-2 ">
          <li className=" mx-5 hover:bg-white hover:text-black hover:duration-75  rounded-full py-1 cursor-pointer ">
            <Link to="/">
              <span className=" px-5 ">Home</span>
            </Link>
          </li>
          <li className=" mx-5 hover:bg-white hover:text-black hover:duration-75 rounded-full py-1 cursor-pointer ">
            <Link to="/orders">
              <span className=" px-5 ">Orders</span>
            </Link>
          </li>
          {/* 
          {session?.user?.role === "admin" && (
            <li className=" mx-5 hover:bg-white hover:duration-75 rounded-full py-1 cursor-pointer ">
              <Link to="/admin">
                <span className=" px-5 ">Dashboard</span>
              </Link>
            </li>
          )} */}
          {session ? (
            <button className=" cursor-pointer my-3 mx-5 w-[120px] text-body-semibold text-white bg-black hover:duration-75 rounded-full py-2 ">
              <Link to="/register">
                <span className=" px-5 ">Sign Out</span>
              </Link>
            </button>
          ) : (
            <button className=" my-3 mx-5 w-[120px] text-body-semibold text-white bg-black hover:duration-75 rounded-full py-2 cursor-pointer">
              <Link to="/login">
                <span className=" px-5 ">Sign In</span>
              </Link>
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
