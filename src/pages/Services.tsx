import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const services = [
  {
    id: "first",
    title: "BMI",
    subtitle: "Drawing & Drafting",
    description:
      "The BIM revolution has transformed the construction industry. When we refer to BIM Modeling Services and REVIT BIM Services, we're talking about the ability of the supply chain to digitally exchange data. Modern BIM technology extends beyond just 3D modeling, incorporating augmented BIM models or BIM dimensions that enable the calculation of the 4th dimension (time), the 5th dimension (cost), and the 6th dimension (project life-cycle or facilities management information).",
    bgColor: "bg-gradient-to-r from-[#0c3125] to-[#144d3c]",
    textColor: "text-[#e6f586]",
    icon: "fas fa-project-diagram",
    route: "/services/bim",
  },
  {
    id: "second",
    title: "3D Visualisation",
    subtitle: "Realistic Renderings & Virtual Walkthroughs",
    description:
      "3D Visualization has revolutionized the way we conceptualize and present design ideas. It allows for the creation of highly detailed and realistic visual representations of architectural and engineering projects before construction begins. Through advanced rendering techniques and virtual walkthroughs, 3D visualization provides clients with a clear, immersive understanding of a project, enhancing decision-making and communication. This technology goes beyond static images, enabling dynamic views that showcase various design alternatives and help anticipate project outcomes in a visually compelling way.",
    bgColor: "bg-gradient-to-l from-[#0c3125] to-[#144d3c]",
    textColor: "text-white",
    icon: "fas fa-cube",
    route: "/services/threeD-visualisation",
  },
  {
    id: "third",
    title: "Structure Design",
    subtitle: "Innovative Engineering for Safe & Efficient Buildings",
    description:
      "Structure Design is the foundation of any building project, ensuring safety, stability, and functionality. It involves the planning and creation of structural systems that support the building's load while adapting to its specific requirements and environment. Advanced engineering techniques and technology are used to design materials and frameworks that can withstand external forces such as wind, earthquakes, and weight. The goal of structural design is to create cost-effective, durable, and resilient structures that meet regulatory standards and are efficient throughout their life-cycle.",
    bgColor: "bg-gradient-to-r from-[#0c3125] to-[#144d3c]",
    textColor: "text-[#e6f586]",
    icon: "fas fa-archway",
    route: "/services/structure-design",
  },
  {
    id: "fourth",
    title: "MEP Design",
    subtitle: "Integrated Solutions for Mechanical, Electrical, and Plumbing Systems",
    description:
      "MEP Design focuses on the efficient integration of mechanical, electrical, and plumbing systems within a building. This discipline ensures that all systems work harmoniously to provide comfort, safety, and energy efficiency. From heating, ventilation, and air conditioning (HVAC) to electrical wiring and plumbing infrastructure, MEP design optimizes the flow of utilities and services while minimizing energy consumption and operational costs. By considering factors like sustainability, regulatory compliance, and future scalability, MEP design plays a crucial role in enhancing the functionality and performance of any building",
    bgColor: "bg-gradient-to-l from-[#0c3125] to-[#144d3c]",
    textColor: "text-white",
    icon: "fas fa-lightbulb",
    route: "/services/mep",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div id="container" className="min-h-screen font-sans text-base md:text-lg my-10">
      <header id="header" className="py-6 px-4 md:px-12">
        <div
          id="main-title"
          className="text-2xl md:text-4xl font-bold flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <h2>
            Our Services
          
          </h2>
        </div>
      </header>
      <div className="space-y-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0
                ? "md:flex-row rounded-l-full md:ml-6"
                : "md:flex-row-reverse rounded-r-full md:mr-6"
            } ${service.bgColor} p-6 md:p-8`}
          >
            {/* Title Section */}
            <div
              className={`title flex items-center justify-center p-6 md:p-8 bg-[#0c3125] rounded-full w-24 h-24 md:w-36 md:h-36 mb-4 md:mb-0`}
            >
              <i className={`${service.icon} text-3xl md:text-5xl text-white`} />
            </div>

            {/* Info Section */}
            <div
              className={`info flex-1 mx-4 md:mx-8 p-4 ${
                index % 2 === 0 ? "md:border-l" : "md:border-r"
              } border-white ${service.textColor}`}
            >
              <div className="text-xl md:text-2xl font-bold">{service.title}</div>
              <div className="text-sm md:text-lg font-light mt-1">{service.subtitle}</div>
              <p className="mt-2 md:mt-4 text-sm md:text-base">{service.description}</p>
              {/* Know More Button */}
              <div className="mt-4 flex justify-start md:justify-start">
                <Link
                  to={service.route}
                  className={`inline-block px-4 py-2 mt-2 font-medium text-sm md:text-base rounded-lg ${
                    index % 2 === 0
                      ? "bg-[#e6f586] text-[#0c3125]"
                      : "bg-white text-[#0c3125]"
                  } hover:shadow-lg`}
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
