// src/pages/Services.tsx
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-[#0c3125]">Our Services</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Explore the wide range of services we offer to help build sustainable solutions.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#0c3125] shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-[#e6f586]">BIM,Drawing and Drafting</h2>
            <p className="mt-2 text-white">Get expert advice for sustainable urban development.</p>
          </div>
          <div className="p-6 bg-[#0c3125] shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-[#e6f586]">3D Visualisation</h2>
            <p className="mt-2 text-white">Innovative green architectural designs.</p>
          </div>
          <div className="p-6 bg-[#0c3125] shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-[#e6f586]">Structure Design</h2>
            <p className="mt-2 text-white">Turn sustainable ideas into reality.</p>
          </div>
          <div className="p-6 bg-[#0c3125] shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-[#e6f586]">MEP Design</h2>
            <p className="mt-2 text-white">Turn sustainable ideas into reality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
