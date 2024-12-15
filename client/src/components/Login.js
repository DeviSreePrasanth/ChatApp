import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); 
  const [isSignInActive, setIsSignInActive] = useState(true);
  
  // Form states for login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");  // Only used for SignUp form

  // State for alert messages
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const togglePanel = () => {
    setIsSignInActive((prev) => !prev);
    setAlertMessage("");  // Clear alert when switching between forms
    setShowAlert(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!email || !password || (!isSignInActive && !name)) {
      setAlertMessage("Please fill all fields.");
      setShowAlert(true);
      return;
    }

    const userData = {
      email,
      password,
      name: isSignInActive ? null : name, // name is not required for login
      type: isSignInActive ? "login" : "signup", // Include 'type' to indicate whether it's a login or signup
    };

    try {
      const response = await axios.post("http://localhost:5000/api/auth", userData);
      console.log(response.data); // Handle successful response (like storing tokens)
      navigate("/home");
    } catch (error) {
      if (error.response) {
        if (error.response.data.message === "Invalid credentials") {
          setAlertMessage("Invalid credentials, please try again.");
        } else if (error.response.data.message === "User already exists") {
          setAlertMessage("User already exists, please login.");
        } else {
          setAlertMessage(error.response.data.message || "Something went wrong.");
        }
        setShowAlert(true);
      } else {
        setAlertMessage("Unexpected error, please try again later.");
        setShowAlert(true);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="relative w-[768px] h-[480px] bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Alert Message */}
        {showAlert && (
          <div className="absolute top-0 w-full bg-red-500 text-white py-2 text-center">
            {alertMessage}
          </div>
        )}

        {/* Panels Container */}
        <div className="absolute top-0 w-full h-full flex">
          {/* Log in Form */}
          <div
            className={`w-1/2 flex flex-col justify-center items-center bg-white px-8 transition-all duration-700 ${
              isSignInActive ? "opacity-100 z-10 translate-x-0" : "opacity-0 z-0 translate-x-[100%]"
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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-sm text-blue-500 cursor-pointer mb-4">Forgot Your Password?</p>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600"
              >
                LOG IN
              </button>
            </form>
          </div>

          {/* Sign Up Form */}
          <div
            className={`w-1/2 flex flex-col justify-center items-center bg-white px-8 transition-all duration-700 ${
              !isSignInActive ? "opacity-100 z-10 translate-x-0" : "opacity-0 z-0 translate-x-[-100%]"
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600"
              >
                SIGN UP
              </button>
            </form>
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
