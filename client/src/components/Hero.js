import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate('/login'); 
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen flex flex-col relative overflow-hidden ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-white to-gray-100'}`}>
      {/* Floating Circles & Shapes */}
      <div>
        {/* Large & Small Animated Circles */}
        <div className={`absolute top-10 left-10 w-32 h-32 ${isDarkTheme ? 'bg-blue-700' : 'bg-blue-300'} opacity-20 rounded-full animate-bounce-slow animate-scale-slow`}></div>
        <div className={`absolute top-1/4 right-10 w-48 h-48 ${isDarkTheme ? 'bg-green-700' : 'bg-green-300'} opacity-30 rounded-full animate-pulse-slow animate-wobble`}></div>
        <div className={`absolute bottom-20 left-20 w-24 h-24 ${isDarkTheme ? 'bg-blue-600' : 'bg-blue-400'} opacity-20 rounded-full animate-bounce-slow animate-diagonal`}></div>
        <div className={`absolute bottom-10 right-1/4 w-36 h-36 ${isDarkTheme ? 'bg-blue-500' : 'bg-blue-200'} opacity-20 rounded-full animate-pulse animate-scale-slow`}></div>
        <div className={`absolute bottom-1/3 right-20 w-28 h-28 ${isDarkTheme ? 'bg-green-500' : 'bg-green-400'} opacity-25 rounded-full animate-spin-slow animate-wobble`}></div>
        <div className={`absolute top-1/3 left-1/3 w-40 h-40 ${isDarkTheme ? 'bg-blue-600' : 'bg-blue-500'} opacity-20 rounded-full animate-bounce-slow animate-diagonal`}></div>
        <div className={`absolute bottom-32 right-1/3 w-32 h-32 ${isDarkTheme ? 'bg-green-400' : 'bg-green-200'} opacity-30 rounded-full animate-pulse-slow animate-scale-slow`}></div>

        
        {/* Added New Shapes & Circles on the Left */}
        <div className={`absolute top-1/4 left-1/6 w-56 h-56 ${isDarkTheme ? 'bg-purple-600' : 'bg-purple-500'} opacity-30 rounded-full animate-pulse-slow animate-scale-slow`}></div>

        {/* Custom Squares */}
        <div className={`absolute top-1/2 left-1/4 w-40 h-40 ${isDarkTheme ? 'bg-teal-600' : 'bg-teal-300'} opacity-35 rounded-md animate-bounce-slow`}></div>
        <div className={`absolute top-1/4 right-1/4 w-32 h-32 ${isDarkTheme ? 'bg-orange-500' : 'bg-orange-200'} opacity-40 rounded-md animate-spin-slow`}></div>
      </div>

      {/* Navbar */}
      <nav className={`flex justify-between items-center px-8 py-4 ${isDarkTheme ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-600 to-green-400'} text-white shadow-lg animate-fade-in-down`}>
        <div className="font-bold text-2xl tracking-wide font-serif">Real Time chat application</div>
        <ul className="flex space-x-8 text-2xl">
          <li onClick={handleGetStarted} className="hover:scale-110 transform transition duration-300 cursor-pointer">Login</li>
          <li onClick={toggleTheme} className="cursor-pointer mt-1">
            {/* Icon for theme toggle */}
            {isDarkTheme ? <FaMoon /> : <MdOutlineWbSunny />}
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <section className="flex flex-col items-center justify-center flex-grow px-8 py-16 relative z-10">
        {/* Heading & CTA Centered */}
        <div className="text-center lg:w-2/3 mb-12">
          <h1 className={`text-5xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-800'} leading-tight mb-6`}>
            Connect Instantly <br /> with Friends!
          </h1>
          <button onClick={handleGetStarted} className={`bg-gradient-to-r ${isDarkTheme ? 'from-gray-600 to-gray-800' : 'from-green-500 to-blue-500'} hover:from-blue-500 hover:to-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300`}>
            Get Started
          </button>
        </div>

        {/* Chat Mockup */}
        <div className={`relative w-full lg:w-1/2 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg p-6 lg:h-[400px] h-[300px]`}>
          {/* Chat Header */}
          <div className="flex justify-between items-center mb-4">
            <div className={`text-${isDarkTheme ? 'gray-400' : 'gray-600'}`}>Today 10:32</div>
            <div className="text-green-500 text-sm">Online</div>
          </div>
          {/* Chat Messages */}
          <div className="space-y-3 overflow-auto h-[90%]">
            <div className={`text-left ${isDarkTheme ? 'bg-green-700' : 'bg-green-200'} text-gray-800 rounded-lg p-2 max-w-[75%]`}>
              Hello! How are you doing today?
            </div>
            <div className={`text-right ${isDarkTheme ? 'bg-blue-700' : 'bg-blue-200'} text-gray-800 rounded-lg p-2 ml-auto max-w-[75%]`}>
              I'm good, thanks for asking!
            </div>
            <div className={`text-left ${isDarkTheme ? 'bg-green-700' : 'bg-green-200'} text-gray-800 rounded-lg p-2 max-w-[75%]`}>
              Are we still on for the meeting?
            </div>
            <div className={`text-right ${isDarkTheme ? 'bg-blue-700' : 'bg-blue-200'} text-gray-800 rounded-lg p-2 ml-auto max-w-[75%]`}>
              Yes, see you at 3 PM!
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`text-center py-4 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} bg-white mt-auto shadow-inner z-10`}>
        <a href="#" className="hover:text-blue-500 transition duration-300">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:text-blue-500 transition duration-300">
          Terms of Service
        </a>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scale-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes diagonal {
          0%, 100% { transform: translate(-10px, -10px); }
          50% { transform: translate(10px, 10px); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 10s infinite ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s infinite linear;
        }
        .animate-scale-slow {
          animation: scale-slow 6s infinite ease-in-out;
        }
        .animate-diagonal {
          animation: diagonal 7s infinite ease-in-out;
        }
        .animate-wobble {
          animation: wobble 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
