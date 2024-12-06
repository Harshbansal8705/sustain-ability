import React from "react";

const BIMServicesPage: React.FC = () => {
  return (
    <div className="font-sans">
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
        <p className="text-lg font-semibold">The FUTURE is BIM Shaped</p>
      </header>

      {/* Content Section */}
      <main className="bg-textHighlight text-baseGreen p-10">
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The FUTURE is BIM Shaped</h2>
          <p className="text-lg leading-relaxed mb-6">
            The BIM revolution has taken hold in the construction industry. When
            we talk about BIM Modelling Services & REVIT BIM Services, we're
            referring to the supply chain's capacity to digitally exchange data.
            Today's BIM technology goes beyond 3D modeling and includes
            augmented BIM models or BIM dimensions that allow for the
            computation of the 4th dimension of time, the 5th dimension of cost,
            and the 6th dimension of Project life-cycle information or
            facilities management.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            BIM Modelling services are becoming more popular as a new way to
            manage projects. BIM facilitates collaboration among stakeholders,
            resulting in increased profitability, lower costs, better time
            management, and improved client relationships. BIM not only makes
            it easier for design and development teams to function more
            effectively, but it also makes it possible for them to use the data
            they produce during the project to benefit from operational and
            maintenance activities.
          </p>
          <p className="text-lg leading-relaxed">
            Are you looking for BIM services that are effective, efficient, and
            reasonably priced? Indovance enables clients to take advantage of
            modern drafting and design practices and tools while meeting
            project and budget constraints when outsourcing BIM projects. With
            ISO-certified processes, quality assurance, cutting-edge
            technologies, and skilled teams, we deliver results that meet your
            requirements.
          </p>
        </section>
      </main>

      
    </div>
  );
};

export default BIMServicesPage;
