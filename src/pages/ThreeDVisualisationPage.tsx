import React from "react";

const ThreeDVisualizationPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-baseGreen text-textHighlight p-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="w-12 h-12 bg-textHighlight rounded-full flex items-center justify-center text-baseGreen font-bold text-lg">
            3D
          </div>
          {/* Title */}
          <h1 className="text-4xl font-bold">3D Visualization Services</h1>
        </div>
        {/* Tagline */}
        <p className="text-lg font-semibold">Bringing Your Designs to Life in 3D</p>
      </header>

      {/* Content Section */}
      <main className="bg-textHighlight text-baseGreen p-10">
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Transform Your Concepts into Realistic Visuals</h2>
          <p className="text-lg leading-relaxed mb-6">
            At Sustainability, we provide top-tier 3D architectural visualization services, encompassing 3D rendering, animations, and interactive walk-throughs. Whether you're working on residential, commercial, or institutional projects, our high-quality 3D models help bring your designs to life before construction even begins. Our realistic 3D renderings and animations are instrumental in helping you communicate your vision to clients, stakeholders, and potential investors.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We aim to deliver unmatched value to architects, realtors, and developers by offering fast turnaround times, competitive pricing, and visuals that enhance your marketing efforts. Leverage our high-quality 3D visuals across social platforms like Instagram, Facebook, and YouTube to showcase your properties in the best possible light.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Beyond architecture, our 3D rendering services are also perfect for creating product models. Manufacturers can use these high-fidelity renderings for marketing, design, and product development, giving a realistic preview before production.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our 3D visualization services are also integrated with CAD drawings, ensuring that your designs are presented in precise, detailed formats that are crucial for the construction industry. CAD drawings provide a comprehensive, accurate representation of building layouts, materials, and dimensions.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Our 3D Rendering and Animation Services Include:</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li>High-quality 3D architectural rendering with light and shadow analysis</li>
            <li>Photo-realistic 3D interior and exterior renderings</li>
            <li>Interactive walkthroughs and flythrough animations for buildings</li>
            <li>Renderings for Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR)</li>
            <li>3D walkthroughs of architectural sites</li>
            <li>Rendering of 3D floor plans for residential, commercial, and industrial buildings</li>
            <li>Furniture rendering of CAD models with realistic textures</li>
            <li>High-quality 3D product renderings for design and marketing communication</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-4">We Provide 3D Renderings & Animations for Various Building Types:</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li>Residential and Commercial Buildings</li>
            <li>Industrial Structures</li>
            <li>High and Low-rise Buildings</li>
            <li>Educational Institutions</li>
            <li>Parking Garages</li>
            <li>Restaurants and Hotels</li>
          </ul>
          <p className="text-lg leading-relaxed mt-6">
            Our 3D visualization solutions offer comprehensive and flexible services tailored to your specific project needs. Whether it’s for marketing, design development, or client presentations, we provide the visuals you need to make a lasting impression.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ThreeDVisualizationPage;
