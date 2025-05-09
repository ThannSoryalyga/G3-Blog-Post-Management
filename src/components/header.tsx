import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } py-4 shadow-md transition-colors duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="text-lg font-extrabold tracking-wide">
          <Link
            to="/"
            className={`${
              darkMode ? "hover:text-gray-400" : "hover:text-gray-600"
            } transition-colors duration-300`}
          >
            G3 Blog Post Management
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
          {["Home", "Blogs", "About", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className={`block md:inline-block text-lg font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800"
              } transition-colors duration-300`}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-yellow-400 hover:bg-yellow-300"
          } transition-colors duration-300`}
        >
          <div
            className={`w-6 h-6 rounded-full transform transition-transform duration-300 ${
              darkMode ? "bg-gray-800 translate-y-0" : "bg-white translate-y-0"
            }`}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.343 17.657l-1.414-1.414M17.657 17.657l-1.414-1.414M6.343 6.343L4.929 7.757M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            )}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
