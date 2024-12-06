import React from "react";

const StructuralDesignServicesPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-baseGreen text-textHighlight p-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="w-18 h-18 bg-textHighlight rounded-full flex items-center justify-center text-baseGreen font-bold text-lg">
            Structure
          </div>
          {/* Title */}
          <h1 className="text-4xl font-bold">Structure Design Services</h1>
        </div>
        {/* Tagline */}
        <p className="text-lg font-semibold">Designing Resilient Structures for the Future</p>
      </header>

      {/* Content Section */}
      <main className="bg-textHighlight text-baseGreen p-10">
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Comprehensive Structural BIM Services</h2>
          <p className="text-lg leading-relaxed mb-6">
            We specialize in providing advanced Structural BIM services for both concrete and steel structures across a wide range of projects, including residential, commercial, and industrial buildings. Whether you're starting from schematic designs (SD) or hand-drawn sketches, we transform them into precise BIM models during the design development phase, leading to comprehensive construction documentation (CD sets).
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our Structural BIM services focus on creating highly detailed 3D models of structural components such as beams, columns, foundations, and slabs. These models not only assist in analyzing structural performance but also enable the identification of potential design conflicts, ensuring optimization for safety, functionality, and efficiency.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The BIM models developed by our skilled engineers are designed to help calculate material requirements and resource planning, ensuring accurate cost estimation and effective time management throughout the project lifecycle.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            With a team of experienced civil and structural engineers, BIM modelers, and draftsmen, we adhere to the highest building standards and local codes to deliver reliable structural models. Our proficiency ensures that every project meets both safety and performance benchmarks.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Structural BIM modeling fosters seamless coordination between architectural, MEP (Mechanical, Electrical, and Plumbing), and other disciplines, enhancing the overall workflow and reducing clashes during construction.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Our Structural BIM Services Include:</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li>Comprehensive Structural BIM Modeling</li>
            <li>Precast Modeling and Detailing</li>
            <li>Detailed Steel Structure Modeling</li>
            <li>Rebar Detailing and Placement Modeling</li>
            <li>Integration and Coordination with Architectural and MEP Models</li>
            <li>Development of Structural Shop Drawings</li>
            <li>Complete Construction Documentation</li>
            <li>Creation of Parametric Families for Structural Elements</li>
            <li>As-Built Structural Modeling</li>
            <li>Point Cloud Data Integration into Structural BIM Models</li>
            <li>Accurate Bill of Quantities (BOQ) Preparation</li>
          </ul>
          <p className="text-lg leading-relaxed mt-6">
            Our expertise in structural BIM modeling allows us to offer high-quality, efficient, and detailed models that cater to all stages of the project. We work closely with all stakeholders to ensure timely delivery, cost control, and seamless execution.
          </p>
        </section>
      </main>
    </div>
  );
};

export default StructuralDesignServicesPage;
