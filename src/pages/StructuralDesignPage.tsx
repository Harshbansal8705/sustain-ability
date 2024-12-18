import React from "react";

const StructuralDesignServicesPage: React.FC = () => {
  return (
    <div className="font-sans my-24">
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
        <p className="text-lg font-semibold">Reimagining Engineering for Resilient Structures</p>
      </header>

      {/* Content Section */}
      <main className="bg-textHighlight text-baseGreen p-10">
        <section className="max-w-5xl mx-auto">
          {/* <h2 className="text-3xl font-bold mb-6">Comprehensive Structural BIM Services</h2> */}
          <p className="text-lg leading-relaxed mb-6">
            Every great building starts with a rock-solid foundation. At AssistArchitect, we don’t just design structures; we craft intelligent frameworks that balance aesthetics, functionality, and safety.
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
            <li><strong>Seismic-Resistant Designs:</strong> Leveraging advanced analysis techniques to ensure safety in high-risk zones.</li>
            <li><strong>Material Optimization:</strong>  Creating cost-efficient designs without compromising durability.</li>
            <li><strong>Load-Balancing Frameworks:</strong> Tailored solutions for wind loads, live loads, and other external forces.</li>
            <li><strong>Specialized Designs:</strong>  Custom solutions for high-rise buildings, complex geometries, and special-use facilities.</li>

          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Our Process</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li><strong>Requirement Analysis:</strong> Collaborate to understand client goals, site conditions, and regulatory needs.</li>
            <li><strong>Conceptual Framework:</strong>   Develop structural concepts that align with architectural intent.</li>
            <li><strong>Detailed Engineering:</strong> Create precise structural models with load simulations and material specifications.</li>
            <li><strong>Execution Support:</strong>  Offer technical guidance during construction to ensure design accuracy.</li>

          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li>Advanced engineering software for precision modeling.</li>
            <li>A track record of delivering high-performance structures globally.</li>
            <li>Compliance with international standards like Eurocode, AISC, and IS codes.</li>


          </ul>
          <button
            onClick={()=>{window.open("/contact-us", "_blank");}}
            className="bg-black hover:bg-secondary hover:text-primary transition text-white mt-10 py-3 px-6 rounded-full shadow-md text-sm md:text-base font-medium"
          >
            Contact Us for Custom Structural Solutions
          </button>
        </section>
      </main>
    </div>
  );
};

export default StructuralDesignServicesPage;
