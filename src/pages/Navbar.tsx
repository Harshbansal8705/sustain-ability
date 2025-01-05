import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] lg:w-4/5 z-50 md:w-6/12 z-50 bg-primary shadow-lg rounded-full">
      <nav className="text-white py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div>
            {/* <h1 className="text-2xl lg:text-3xl tracking-tight">
              <span>Sustain·</span><span className="font-semibold text-textHighlight">ability</span>
            </h1> */}
            <img src="/logo.png" alt="Logo" className='h-8' />
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-6 text-lg font-playfair">
            <Link to="/" className="hover:text-gray-400 transition duration-300 ease-in-out">Home</Link>
            <Link to="/services" className="hover:text-gray-400 transition duration-300 ease-in-out">Services</Link>
            <Link to="/faqs" className="hover:text-gray-400 transition duration-300 ease-in-out">FAQs</Link>
            <Link to="/about-us" className="hover:text-gray-400 transition duration-300 ease-in-out">About Us</Link>
            <Link to="/contact-us" className="hover:text-gray-400 transition duration-300 ease-in-out">Contact Us</Link>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-green-400 focus:outline-none transition duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed h-screen inset-0 bg-gradient-to-br from-baseGreen via-primary to-green-800 text-white flex flex-col items-center justify-center z-50 rounded-lg transition-transform duration-500">
            <button
              type="button"
              className="absolute top-5 right-5 text-white hover:text-green-400 focus:outline-none transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center space-y-6 font-playfair text-lg w-full">
              <Link to="/" className="hover:text-green-400 transition duration-300 ease-in-out text-2xl" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/services" className="hover:text-green-400 transition duration-300 ease-in-out text-2xl" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/portfolio" className="hover:text-green-400 transition duration-300 ease-in-out text-2xl" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
              <Link to="/about-us" className="hover:text-green-400 transition duration-300 ease-in-out text-2xl" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/contact-us" className="hover:text-green-400 transition duration-300 ease-in-out text-2xl" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </ div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;