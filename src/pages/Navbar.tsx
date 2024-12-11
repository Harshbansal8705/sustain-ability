import React from 'react'
import HeroImage from "../images/hero.png";
import ArrowUpRightIcon from '../icons/ArrowUpRightIcon';
import Marquee from '../components/Marquee';
import QuoteIcon from '../icons/QuoteIcon';
import MayorEmilyGreene from '../images/mayor-emily-greene.png';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className="bg-[#0c3125] text-white py-4 shadow-lg rounded-full mx-4 my-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide mr-auto"> {/* Added `mr-auto` for spacing */}
          <h1 className="text-2xl lg:text-3xl tracking-tight">
            <span>Sustain·</span><span className="font-semibold">ability</span>
          </h1>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-8 text-lg ml-8"> {/* Added `ml-8` for spacing */}
            <Link
              to="/"
              className="hover:text-green-400 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:text-green-400 transition duration-300 ease-in-out"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-green-400 transition duration-300 ease-in-out"
            >
              Portfolio
            </Link>
            <Link
              to="/about-us"
              className="hover:text-green-400 transition duration-300 ease-in-out"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-green-400 transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div className="md:hidden ml-auto"> {/* Added `ml-auto` for spacing */}
            <button
              type="button"
              className="text-white hover:text-green-400 focus:outline-none transition duration-300"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) {
                  menu.classList.toggle("hidden");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="hidden md:hidden flex flex-col items-center space-y-4 mt-4 bg-green-800 py-4 text-lg rounded-lg shadow-md mx-4"
        >
          <Link
            to="/"
            className="hover:text-green-400 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-green-400 transition duration-300 ease-in-out"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-green-400 transition duration-300 ease-in-out"
          >
            Portfolio
          </Link>
          <Link
            to="/about-us"
            className="hover:text-green-400 transition duration-300 ease-in-out"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-green-400 transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
