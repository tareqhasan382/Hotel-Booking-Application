import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Redux/auth/authApi";
import { toast } from "react-toastify";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const roomString = localStorage.getItem("roomId");
  const [login] = useLoginMutation();
  const navgate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      // console.log("data:", data);
      const result = await login(data);
      setLoading(false);
      if (result.data.status) {
        setLoading(false);
        toast.success("User loggedIn successfully");
        //rooms
        if (roomString) {
          localStorage.removeItem("roomId");
          return navgate(`/rooms/${roomString}`);
        }
        navgate("/");
      }
      if (!result.data.status) {
        setLoading(false);
        toast.error("User loggedIn Field");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="my-10 h-full items-center justify-center pb-10 rounded-lg shadow-lg flex flex-col bg-white text-black px-6 md:px-10 border border-gray-300">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="py-5 font-bold mb-4 text-center text-5xl">Sign In</h1>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left w-full ">Email</label>
            <input
              className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] outline-none focus:border-gray-600 text-black"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500 text-left w-full">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left w-full">Password</label>
            <input
              className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] outline-none focus:border-gray-600 text-black"
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500 text-left w-full">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="w-full flex flex-col">
            <button
              disabled={loading}
              type="submit"
              className="text-xl font-bold p-2 rounded-lg bg-black hover:bg-gray-800 duration-700 text-white mt-2"
            >
              {loading ? "Loading..." : "Login"}
            </button>
            <span
              onClick={() => navgate("/forgot-passsword")}
              className="w-full text-right mb-4 cursor-pointer"
            >
              Forgot password?
            </span>
          </div>
          <div className="w-full flex items-center justify-center text-gray-600">
            <hr className="w-1/2 border-gray-400" /> OR
            <hr className="w-1/2 border-gray-400" />
          </div>
        </form>
        <div className="w-full flex flex-col gap-2 py-5">
          <button className="flex flex-row items-center justify-around text-base font-semibold p-2 outline outline-1 outline-black rounded-lg bg-white hover:bg-black hover:text-white text-black duration-700">
            <FcGoogle size={30} /> Continue with Google
          </button>
          <button className="flex flex-row items-center justify-around text-base font-semibold p-2 outline outline-1 outline-black rounded-lg bg-white text-black hover:bg-black hover:text-white duration-700">
            <FaGithub size={30} /> Continue with Github
          </button>
        </div>
        <span className="text-right">
          Don&rsquo;t have an account?
          <Link to="/register" className="underline text-blue-600 pl-2">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
