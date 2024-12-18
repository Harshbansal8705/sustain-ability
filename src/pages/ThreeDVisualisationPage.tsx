import React from "react";

const ThreeDVisualizationPage: React.FC = () => {
  return (
    <div className="font-sans my-24">
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
        <p className="text-lg font-semibold">Turning Ideas Into Reality with Stunning Visuals</p>
      </header>

      {/* Content Section */}
      <main className="bg-textHighlight text-baseGreen p-10">
        <section className="max-w-5xl mx-auto">
          {/* <h2 className="text-3xl font-bold mb-6">Comprehensive Structural BIM Services</h2> */}
          <p className="text-lg leading-relaxed mb-6">
          In a world where visuals matter, our 3D visualization services bring your designs to life, allowing stakeholders to experience projects before they’re built.
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
            <li><strong>Photorealistic Rendering:</strong>   High-definition visuals that capture every detail of your project.</li>
            <li><strong>Virtual Walkthroughs:  </strong>Interactive experiences for real estate pitches and client presentations.</li>
            <li><strong>Material Simulations:</strong>Visualize different finishes, textures, and materials to make informed design choices.</li>
            <li><strong>360° Panoramas:  </strong> Immersive environments for a complete spatial experience.</li>

          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Our Process</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li><strong>Project Understanding:</strong>Collect plans, elevations, and design briefs.
            </li>
            <li><strong>Model Creation: </strong>Develop a digital 3D model with accurate dimensions and textures.</li>
            <li><strong>Rendering & Animation:</strong> Apply realistic lighting, shadows, and material properties.</li>
            <li><strong>Client Review:</strong>  Refine visuals based on feedback for final delivery.</li>

          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h3>
          <ul className="list-disc ml-6 text-lg leading-relaxed">
            <li>State-of-the-art rendering tools like V-Ray, Lumion, and Unreal Engine.</li>
            <li>Quick turnaround times to meet tight deadlines.</li>
            <li>Visual storytelling that drives engagement and decision-making.</li>
          </ul>
          <button
            onClick={() => { window.open("/contact-us", "_blank"); }}
            className="bg-black hover:bg-secondary hover:text-primary transition text-white mt-10 py-3 px-6 rounded-full shadow-md text-sm md:text-base font-medium"
          >
            Experience the Power of 3D Visualization
          </button>
        </section>
      </main>
    </div>
  );
};

export default ThreeDVisualizationPage;
