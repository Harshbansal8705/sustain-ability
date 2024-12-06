import React, { useState } from "react";

const AboutUs: React.FC = () => {
  const [isMissionVisible, setMissionVisible] = useState(false);

  const toggleMission = () => setMissionVisible(!isMissionVisible);

  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c3125] mb-8 text-center">
          About Us
        </h2>

        {/* Introduction Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a team committed to driving sustainability and innovation.
            Our journey began with a mission to empower communities, businesses,
            and individuals to embrace eco-friendly solutions and shape a
            brighter, greener future. Join us as we continue to make an impact!
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="mb-12">
          <button
            onClick={toggleMission}
            className="flex items-center justify-between w-full bg-[#0c3125] text-green-700 font-bold py-4 px-6 rounded-lg hover:bg-[#1A342B] transition"
          >
            <span className="text-[#e6f586]">Our Mission and Vision</span>
            <svg
              className={`w-6 h-6 transform ${
                isMissionVisible ? "rotate-180" : "rotate-0"
              } transition-transform`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isMissionVisible && (
            <div className="mt-4 bg-[#0c3125] border border-green-200 rounded-lg p-6 text-gray-700">
              <h3 className="text-xl font-semibold text-[#e6f586] mb-2">
                Our Mission
              </h3>
              <p className="text-white">
                To inspire and enable sustainable practices worldwide, creating
                harmony between technological advancements and the environment.
              </p>
              <h3 className="text-xl font-semibold text-[#e6f586] mt-4 mb-2">
                Our Vision
              </h3>
              <p className="text-white">
                To become a global leader in sustainability solutions, fostering
                a legacy of eco-conscious innovation and collaboration.
              </p>
            </div>
          )}
        </div>

        {/* Team Members Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#0c3125] mb-6 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alice Johnson",
                role: "CEO",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Michael Brown",
                role: "CTO",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Emma Williams",
                role: "COO",
                img: "https://via.placeholder.com/150",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center bg-[#0c3125] p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-bold text-[#e6f586]">
                  {member.name}
                </h4>
                <p className="text-white">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
