import React from "react";

const MEPServicesPage: React.FC = () => {
  return (
    <div className="font-sans my-24">
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
        <p className="text-lg font-semibold">Redefining Building Systems for Efficiency & Sustainability</p>
      </header>

      {/* Content Section */}
      <main className="bg-textHighlight text-baseGreen p-10">
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Comprehensive MEP Design Solutions</h2>
          <p className="text-lg leading-relaxed mb-6">
            In modern buildings, the synergy of mechanical, electrical, and plumbing systems defines functionality. Our MEP designs integrate innovation and practicality to deliver seamless experiences.
          </p>
          {/* <p className="text-lg leading-relaxed mb-6">
            We specialize in MEP BIM modeling and drafting, ensuring accurate detailing for every aspect of the MEP systems. Our team of expert engineers and draftspersons are equipped to develop high-quality MEP BIM models for any building type. We provide support for the entire lifecycle of your project, including coordination, system optimization, fabrication, and installation.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            At Sustainability, we focus on delivering well-coordinated models and drawings that integrate architectural, structural, and MEP designs. Using industry-leading software such as Autodesk Revit and Navisworks, we ensure a seamless workflow throughout the design and construction process.
          </p> */}
          <h3 className="text-2xl font-semibold mt-6 mb-4">Our Expertise</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li><strong>HVAC Systems:</strong> Design and optimization of heating, ventilation, and air conditioning systems for energy efficiency.</li>
            <li><strong>Electrical Engineering:</strong> Load balancing, wiring layouts, and backup systems that prioritize reliability.</li>
            <li><strong>Plumbing Systems:</strong>Sustainable water management, piping design, and waste disposal solutions.</li>
            <li><strong>Fire Safety Systems:</strong>Advanced smoke extraction, sprinkler layouts, and alarm systems compliant with NFPA standards.</li>

          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Our Process</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li><strong>Initial Assessment:</strong>Evaluate project requirements, building type, and environmental considerations.</li>
            <li><strong>System Design: </strong>Develop detailed schematics for HVAC, electrical, and plumbing systems.</li>
            <li><strong>Integration & Coordination: </strong>Collaborate with architects and structural engineers to ensure seamless implementation.</li>
            <li><strong>Performance Testing:</strong> Conduct simulations to validate energy efficiency and compliance.</li>

          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li>Proven expertise in creating sustainable, cost-effective MEP systems.</li>
            <li>Integration of smart technologies for building automation.</li>
            <li>Focus on long-term operational efficiency and maintenance ease.</li>


          </ul>
          <button
            onClick={() => { window.open("/contact-us", "_blank"); }}
            className="bg-black hover:bg-secondary hover:text-primary transition text-white mt-10 py-3 px-6 rounded-full shadow-md text-sm md:text-base font-medium"
          >
            Let’s Optimize Your Building Systems
          </button>
        </section>
      </main>
    </div>
  );
};

export default MEPServicesPage;
