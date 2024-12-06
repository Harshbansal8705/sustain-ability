import React from "react";

const MEPServicesPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-baseGreen text-textHighlight p-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="w-12 h-12 bg-textHighlight rounded-full flex items-center justify-center text-baseGreen font-bold text-lg">
            MEP
          </div>
          {/* Title */}
          <h1 className="text-4xl font-bold">MEP Design Services</h1>
        </div>
        {/* Tagline */}
        <p className="text-lg font-semibold">Shaping Efficient, Sustainable Solutions</p>
      </header>

      {/* Content Section */}
      <main className="bg-textHighlight text-baseGreen p-10">
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Comprehensive MEP Design Solutions</h2>
          <p className="text-lg leading-relaxed mb-6">
            Sustainability offers a comprehensive range of MEP BIM services tailored to various building projects, including educational institutions, healthcare facilities, commercial buildings, residential complexes, public infrastructure, and industrial facilities. Our services are aligned with the highest standards and meet all necessary building codes and regulations.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We specialize in MEP BIM modeling and drafting, ensuring accurate detailing for every aspect of the MEP systems. Our team of expert engineers and draftspersons are equipped to develop high-quality MEP BIM models for any building type. We provide support for the entire lifecycle of your project, including coordination, system optimization, fabrication, and installation.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            At Sustainability, we focus on delivering well-coordinated models and drawings that integrate architectural, structural, and MEP designs. Using industry-leading software such as Autodesk Revit and Navisworks, we ensure a seamless workflow throughout the design and construction process.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Our MEP BIM Modeling Services Include:</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li>HVAC/MEP Layout Modeling</li>
            <li>Mechanical Ductwork and Duct Fittings Modeling</li>
            <li>Mechanical Equipment Modeling and Equipment Schedules</li>
            <li>Diffusers, Grills, and Vents Modeling</li>
            <li>Electrical Lighting Fixtures, Cable Tray, and Conduit Modeling</li>
            <li>Plumbing Layout Modeling and Sanitary Fixtures</li>
            <li>3D Modeling and Rendering for MEP Systems</li>
            <li>Walk-Throughs of MEP Models for Visualization</li>
            <li>Fabrication Drawings for MEP Components</li>
            <li>Bill of Quantities and Material Takeoffs</li>
          </ul>
          <p className="text-lg leading-relaxed mt-6">
            Our goal is to streamline the construction process through accurate, coordinated, and fully integrated MEP BIM services. Whether you're in the early design phase or preparing for installation, Sutainability's MEP services ensure optimal performance, cost efficiency, and long-term sustainability for your building projects.
          </p>
        </section>
      </main>
    </div>
  );
};

export default MEPServicesPage;
