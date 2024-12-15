import React, { useState } from "react";

const Login = () => {
  const [isSignInActive, setIsSignInActive] = useState(true);

  const togglePanel = () => {
    setIsSignInActive((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="relative w-[768px] h-[480px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Panels Container */}
        <div className="absolute top-0 w-full h-full flex">
          {/* Log in Form */}
          <div
            className={`w-1/2 flex flex-col justify-center items-center bg-white px-8 transition-all duration-700 ${
              isSignInActive
                ? "opacity-100 z-10 translate-x-0"
                : "opacity-0 z-0 translate-x-[100%]"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">Log in</h2>
            <div className="flex space-x-3 mb-4">
              <button className="w-10 h-10 rounded-full shadow-md text-gray-600 border flex items-center justify-center">
                f
              </button>
              <button className="w-10 h-10 rounded-full shadow-md text-gray-600 border flex items-center justify-center">
                G
              </button>
              <button className="w-10 h-10 rounded-full shadow-md text-gray-600 border flex items-center justify-center">
                in
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-4">or use your account</p>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <p className="text-sm text-blue-500 cursor-pointer mb-4">
              Forgot Your Password?
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600">
              LOG IN
            </button>
          </div>

          {/* Sign Up Form */}
          <div
            className={`w-1/2 flex flex-col justify-center items-center bg-white px-8 transition-all duration-700 ${
              !isSignInActive
                ? "opacity-100 z-10 translate-x-0"
                : "opacity-0 z-0 translate-x-[-100%]"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
            <div className="flex space-x-3 mb-4">
              <button className="w-10 h-10 rounded-full shadow-md text-gray-600 border flex items-center justify-center">
                f
              </button>
              <button className="w-10 h-10 rounded-full shadow-md text-gray-600 border flex items-center justify-center">
                G
              </button>
              <button className="w-10 h-10 rounded-full shadow-md text-gray-600 border flex items-center justify-center">
                in
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-4">or use your email</p>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600">
              SIGN UP
            </button>
          </div>
        </div>

        {/* Overlay Panel */}
        <div
          className={`absolute top-0 w-1/2 h-full flex items-center justify-center bg-gradient-to-r from-red-400 to-orange-500 transition-transform duration-700 ${
            isSignInActive ? "translate-x-[100%]" : "-translate-x-0"
          }`}
        >
          <div className="text-center text-white p-8">
            <h2 className="text-3xl font-bold mb-4">
              {isSignInActive ? "Welcome Back!" : "Hello, Friend!"}
            </h2>
            <p className="mb-6">
              {isSignInActive
                ? "To keep connected with us, please login with your personal info."
                : "Enter your details and start the journey with us."}
            </p>
            <button
              onClick={togglePanel}
              className="border-2 border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-red-500"
            >
              {isSignInActive ? "SIGN UP" : "LOG IN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
