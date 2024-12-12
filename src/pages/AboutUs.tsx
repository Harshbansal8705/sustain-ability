// Import necessary dependencies
import React, { useState, useEffect } from "react";
import "../images/CoreValues.jpg"
import "../images/vision.jpg"
import "../images/mission.jpg"
import "../images/philosophy.jpg"
import "../images/person1.jpeg"
import WhoWeAre from "./WhoWeAre";
import TextComponent from "./Text";
import CultureCard from "./Culture";
import CareersSection from "./CareerSection";
import PlaybookSection from "./PlaybookSection";
import BlogSection from "./BlogSection";
import HeroSection from "./HeroSection";
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
      <TextComponent></TextComponent>
      <CultureCard></CultureCard>
      <CareersSection></CareersSection>
      <PlaybookSection></PlaybookSection>
      <BlogSection></BlogSection>
      <HeroSection></HeroSection>

    </div>
  );
};

export default AboutUs;
