import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { userLoggedOut } from "../Redux/auth/authSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const session = useSelector((state: RootState) => state.auth);
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto overflow-x-hidden">
      <div className=" px-5 flex items-center justify-between py-5 relative">
        <div className="flex items-center justify-center md:space-x-10 lg:space-x-20 ">
          <div className="font-semibold text-2xl">
            <Link to="/">
              <h1 className=" gradient-text text-transparent text-3xl font-bold pulse-animation">
                Hotel Booking
              </h1>
            </Link>
          </div>
        </div>

        <div className=" flex items-center space-x-2">
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
                  to={session?.user ? "/orders" : "/login"}
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/hotels"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Hotels
                </Link>
              </li>

              {session.user ? (
                <li onClick={() => dispatch(userLoggedOut())}>
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

          {/* <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative cursor-pointer"
          ></div> */}
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
          <Link to="/">
            <li className=" mx-5 hover:bg-white hover:text-black hover:duration-75  rounded-full py-1 cursor-pointer ">
              <span className=" px-5 ">Home</span>
            </li>
          </Link>

          <Link to="/orders">
            <li className=" mx-5 hover:bg-white hover:text-black hover:duration-75 rounded-full py-1 cursor-pointer ">
              <span className=" px-5 ">Orders</span>
            </li>
          </Link>

          <Link to="/hotels">
            <li className=" mx-5 hover:bg-white hover:text-black hover:duration-75 rounded-full py-1 cursor-pointer ">
              <span className=" px-5 ">Hotels</span>
            </li>
          </Link>

          {/* 
          {session?.user?.role === "admin" && (
            <li className=" mx-5 hover:bg-white hover:duration-75 rounded-full py-1 cursor-pointer ">
              <Link to="/admin">
                <span className=" px-5 ">Dashboard</span>
              </Link>
            </li>
          )} */}
          {session ? (
            <button
              onClick={() => dispatch(userLoggedOut())}
              className=" cursor-pointer my-3 mx-5 w-[120px] text-body-semibold text-white bg-black hover:duration-75 rounded-full py-2 "
            >
              <span className=" px-5 ">Sign Out</span>
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
