import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-zinc-900 fixed top-0 z-50">
      <div className="flex items-center justify-between px-4 lg:px-10 py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-semibold text-white">
            Uber
          </Link>
          <ul className="hidden lg:flex gap-8 items-center  text-gray-100">
            <li>
              <Link to="/">Ride</Link>
            </li>
            <li>
              <Link to="/">Drive</Link>
            </li>
            <li>
              <Link to="/">Business</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-100 hover:text-gray-300 transition-all duration-300 ease-linear"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-white text-zinc-900 rounded-full hover:bg-gray-100 transition-all duration-300 ease-linear"
          >
            Signup
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <div className="lg:hidden flex gap-4 items-center">
            <Link
              to="/login"
              className="text-gray-100 text-sm hover:text-gray-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-sm px-3 py-1 bg-white text-black rounded-full hover:bg-gray-100"
            >
              Signup
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <span className="text-2xl font-bold text-white">×</span>
            ) : (
              <span className="text-2xl font-bold text-white">☰</span>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-white flex flex-col items-center py-20 transform transition-transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } duration-500 ease-linear`}
      >
        <ul className="flex flex-col gap-6 items-center font-medium text-gray-700 text-lg">
          <li>
            <Link
              to="/"
              className="text-xl "
              onClick={() => setIsMenuOpen(false)}
            >
              Ride
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-xl "
              onClick={() => setIsMenuOpen(false)}
            >
              Drive
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-xl "
              onClick={() => setIsMenuOpen(false)}
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-xl "
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-xl "
              onClick={() => setIsMenuOpen(false)}
            >
              En
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="text-xl "
              onClick={() => setIsMenuOpen(false)}
            >
              Help
            </Link>
          </li>
        </ul>
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-black"
          onClick={() => setIsMenuOpen(false)}
        >
          ×
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
