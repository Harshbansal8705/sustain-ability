import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import ContactUs from "./ContactUs";

const HeroSection = () => {
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null); // Reference to Contact Us section

  const toggleContactForm = () => {
    setShowContact((prev) => {
      if (!prev && contactRef.current) {
        // Scroll to the Contact Us section if it's being opened
        setTimeout(() => {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay for smooth animation
      }
      return !prev;
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-baseGreen h-screen text-white py-10 px-6 md:py-20 md:px-20 flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
            Ready to be
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-textHighlight">
            undeniable?
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl my-8 leading-relaxed px-2 sm:px-6">
            For brands and enterprise companies that demand digital marketing
            strategies with proven impact, Sustain.ability is ready to be your partner in
            business growth.
          </p>
          <button
            onClick={toggleContactForm}
            className="bg-black hover:bg-secondary hover:text-primary transition text-white mt-10 py-3 px-6 rounded-full shadow-md text-sm md:text-base font-medium"
          >
            Get in touch ↗
          </button>
        </div>
      </div>

      {/* Contact Us Section with Animation */}
      <div ref={contactRef}>
        {showContact && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <ContactUs />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
