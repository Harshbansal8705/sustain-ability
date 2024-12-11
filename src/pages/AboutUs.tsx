// Import necessary dependencies
import React, { useState, useEffect } from "react";
import "../images/CoreValues.jpg"
import "../images/vision.jpg"
import "../images/mission.jpg"
import "../images/philosophy.jpg"
import "../images/person1.jpeg"
import HappyClientsCarousel from "./HappyClientCarousel";
import FAQs from "./FAQs";
import WhoWeAre from "./WhoWeAre";
// Tailwind-based component
const AboutUs = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Our People";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 300); // Typing speed (200ms per character)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden my-20">
      <WhoWeAre></WhoWeAre>
      {/* Header Section */}
      {/* <header className="py-10 px-5 text-center bg-gradient-to-r from-blue-500 to-blue-800 text-white">
        <h1 className="text-5xl font-bold">Meet Our People</h1>
      </header> */}

      {/* Our People Section */}
      <section className="py-16 px-5">
        <h2 className="text-4xl font-bold text-center mb-10">
          <span className="typing-animation"><span className="text-gray-600">MEET </span>{typedText}</span>            <span className="blinking-cursor">|</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((person, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`person1.jpeg`}
                alt="Person"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Person Name</h3>
                <p className="text-gray-500">Role/Title</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Know Us Section */}
      {/* About Us Section */}
<section className="py-16 px-5 bg-gradient-to-r from-primary to-secondary">
  <div className="container mx-auto">
    <h2 className="text-4xl text-center mb-10 text-white">
      Know <span className="text-amber-300 font-bold">About Us</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="flex items-center">
        <p className="text-white text-lg leading-relaxed">
          Sustain.ability is a multidisciplinary CAD studio. We collaborate with our clients to design, develop, and deliver work that we are proud of and that represents our passion for engineering. We have world-class development teams with deep domain expertise and project management skills that enable us to run a seamless, scalable, cost-effective offshoring model that turns complex business challenges into real business opportunities. We are more than just a service provider; We are a solutions provider for your SUCCESS.
        </p>
      </div>
      <div className="flex justify-evenly">
        <div className="w-1/3">
          <img src="vision.jpg" alt="" className="rounded-lg shadow-lg" />
          <h3 className="text-lg font-bold text-white mt-3">Our Vision</h3>
        </div>
        <div className="w-1/3">
          <img src="mission.jpg" alt="" className="rounded-lg shadow-lg" />
          <h3 className="text-lg font-bold text-white mt-3">Our Mission</h3>
        </div>
        <div className="w-1/3">
          <img src="philosophy.jpg" alt="" className="rounded-lg shadow-lg" />
          <h3 className="text-lg font-bold text-white mt-3">Our Philosophy</h3>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Core Values Section */}
<section className="py-16 px-5 bg-gradient-to-r from-primary to-secondary">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10 text-white">Core Values</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {[
        { title: "Integrity", description: "We value honesty and trust." },
        { title: "Innovation", description: "We strive for creativity." },
        { title: "Excellence", description: "We pursue perfection." },
      ].map((value, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-xl font-bold mb-3">{value.title}</h3>
          <p className="text-gray-600">{value.description}</p>
          <button className="bg-amber-300 text-white py-2 px-4 rounded-lg mt-3 hover:bg-amber-400 transition-colors duration-300">
            Learn More
          </button>
        </div>
      ))}
    </div>
  </div>
</section>
      <HappyClientsCarousel></HappyClientsCarousel>
      <FAQs></FAQs>
    </div>
  );
};

export default AboutUs;
