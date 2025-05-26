import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-4 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="text-lg font-extrabold tracking-wide">
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Blog Post
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="space-y-2">
            <span
              className={`block w-8 h-1 bg-gray-800 dark:bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-gray-800 dark:bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-gray-800 dark:bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-100 dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:flex items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {[, "Blogs", "About", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="block md:inline-block text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item}
            </Link>
          ))}

          {/* Log In and Register Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <Link
              to="/login"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on button click
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on button click
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
