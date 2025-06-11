import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-pink-500 hover:text-pink-600 transition duration-300"
            >
              🦕
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-base items-center">
            <Link
              to="/about"
              className="text-white hover:text-pink-500 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/product"
              className="text-white hover:text-pink-500 transition duration-300"
            >
              Product
            </Link>
            <Link
              to="/service"
              className="text-white hover:text-pink-500 transition duration-300"
            >
              Service
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-pink-500 transition duration-300"
            >
              Projects
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 text-sm">
          <Link
            to="/about"
            className="block py-2 text-gray-700 hover:text-pink-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/product"
            className="block py-2 text-gray-700 hover:text-pink-500"
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <Link
            to="/service"
            className="block py-2 text-gray-700 hover:text-pink-500"
            onClick={() => setIsOpen(false)}
          >
            Service
          </Link>
          <Link
            to="/projects"
            className="block py-2 text-gray-700 hover:text-pink-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
