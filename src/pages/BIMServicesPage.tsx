import React from "react";

const BIMServicesPage: React.FC = () => {
  return (
    <div className="font-sans my-24">
      {/* Header Section */}
      <header className="bg-baseGreen text-textHighlight p-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="w-12 h-12 bg-textHighlight rounded-full flex items-center justify-center text-baseGreen font-bold text-lg">
            BIM
          </div>
          {/* Title */}
          <h1 className="text-4xl font-bold">BIM Services</h1>
        </div>
        {/* Tagline */}
        <p className="text-lg font-semibold">Shaping the Future of Construction with BIM</p>
      </header>

      {/* Content Section */}
      <main className="bg-textHighlight text-baseGreen p-10">
        <section className="max-w-5xl mx-auto">
          {/* <h2 className="text-3xl font-bold mb-6">Comprehensive Structural BIM Services</h2> */}
          <p className="text-lg leading-relaxed mb-6">
            Building Information Modeling (BIM) has transformed how projects are planned and executed. At AssistArchitect, we deliver intelligent, collaborative BIM solutions that minimize risks and maximize efficiency.
          </p>
          {/* <p className="text-lg leading-relaxed mb-6">
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
          </p> */}
          <h3 className="text-2xl font-semibold mt-6 mb-4">Our Expertise</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li><strong>3D Modeling:</strong>  Detailed visual representation of architectural, structural, and MEP elements.
            </li>
            <li><strong>4D (Time) & 5D (Cost) BIM: </strong> Project timelines and cost estimates integrated into models.</li>
            <li><strong>Clash Detection:</strong> Identify and resolve design conflicts before construction begins.</li>
            <li><strong>Facility Management BIM: </strong> Post-construction models for lifecycle management and maintenance.</li>

          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Our Process</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li><strong>Model Creation:</strong> Develop data-rich 3D models using platforms like Revit and Navisworks.
            </li>
            <li><strong>Coordination:</strong> Integrate structural, MEP, and architectural elements for a unified approach.</li>
            <li><strong>Simulations:</strong> Perform construction sequence analysis and cost forecasting.</li>
            <li><strong>Handover:</strong>  Deliver comprehensive BIM files for construction and facility management.</li>

          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li>Expertise in global BIM standards (LOD, COBie).</li>
            <li>End-to-end support, from pre-construction to handover.</li>
            <li>Reduce project delays and cost overruns with precise modeling.</li>


          </ul>
          <button
            onClick={() => { window.open("/contact-us", "_blank"); }}
            className="bg-black hover:bg-secondary hover:text-primary transition text-white mt-10 py-3 px-6 rounded-full shadow-md text-sm md:text-base font-medium"
          >
            Request a Free BIM Consultation
          </button>
        </section>
      </main>


    </div>
  );
};

export default BIMServicesPage;
