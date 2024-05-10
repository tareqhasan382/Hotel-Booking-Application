import React from "react";

interface LoaderProps {
  text?: string;
}

const LoaderModal: React.FC<LoaderProps> = ({ text }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <svg
              className="animate-spin h-20 w-20 text-gray-600 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-35"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8v-4H8a4 4 0 00-4 4z"
              ></path>
            </svg>
            <span className="text-gray-800 text-xl font-bold">Loading...</span>
          </div>
          {text ? (
            <p className="text-black">{text}</p>
          ) : (
            <p>Please wait a couple of moments</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoaderModal;

/*
<div className=" w-screen h-screen ">
      <Loader />
</div>
*/
