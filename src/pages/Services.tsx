import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const services = [
  {
    id: "first",
    title: "BIM",
    subtitle: "Revolutionizing Construction with Data-Driven Modeling",
    description:
      "BIM isn’t just a tool—it’s the future of collaboration and precision. We empower your projects with intelligent modeling that transforms planning, execution, and management.​<br><br><strong>What we deliver:</strong><br><ul style='list-style:disc; padding-left:20px'><li >Comprehensive 3D/4D/5D modeling tailored to your project.</li><li>Clash detection for streamlined workflows and zero on-site surprises.</li><li>Data-rich models to enable smarter decision-making and lifecycle management.</li></ul>",
    bgColor: "bg-gradient-to-r from-[#0c3125] to-[#144d3c]",
    textColor: "text-[#e6f586]",
    icon: "fas fa-project-diagram",
    route: "/services/bim",
    button: "See BIM in Action",
    pos: "right"
  },
  {
    id: "second",
    title: "3D Visualisation",
    subtitle: "Immersive Visuals That Speak Your Vision",
    description:
      "Step into the future with breathtaking 3D renderings and interactive walkthroughs that bring ideas to life. We help you visualize every detail, leaving no room for guesswork.<br><br><strong>What we deliver:</strong><br><ul style='list-style:disc; padding-left:20px'><li >High-definition, photorealistic visuals for pitches, approvals, and marketing.</li><li>Interactive virtual walkthroughs for immersive client experiences./li><li>Multi-option simulations to evaluate design possibilities in real-time.</li></ul>",
    bgColor: "bg-gradient-to-l from-[#0c3125] to-[#144d3c]",
    textColor: "text-white",
    icon: "fas fa-cube",
    route: "/services/threeD-visualisation",
    button: "View Our Visuals",
    pos: "left"
  },
  {
    id: "third",
    title: "Structure Design",
    subtitle: "Innovative Engineering for Safe & Efficient Buildings",
    description:
      "We craft intelligent, future-proof structural designs that prioritize safety, efficiency, and adaptability. Our expertise ensures every project stands resilient against the challenges of time, environment, and load dynamics.<br><br><strong>What We Deliver:</strong><br><ul style='list-style-type:disc; padding-left:20px;'><li>Innovative structural frameworks designed for seismic and wind resilience.</li><li>Optimization of materials to balance cost-effectiveness with durability.</li><li>Tailored designs for complex architectural visions and high-performance buildings.</li></ul>",

    bgColor: "bg-gradient-to-r from-[#0c3125] to-[#144d3c]",
    textColor: "text-[#e6f586]",
    icon: "fas fa-archway",
    route: "/services/structure-design",
    button: "Explore our Approach",
    pos: "right"
  }
  ,
  {
    id: "fourth",
    title: "MEP Design",
    subtitle: "Precision-Driven Systems for Seamless Functionality",
    description:
      "Our MEP solutions go beyond integration—they redefine efficiency, sustainability, and performance. From concept to execution, we ensure every system is designed to work in perfect harmony.<br><br><strong>What we deliver:</strong><br><ul style='list-style-type:disc; padding-left:20px;'><li>Intelligent electrical layouts for reliability and scalability.</li><li>Energy-efficient HVAC systems optimized for performance and comfort.</li><li>Sustainable plumbing designs with water management solutions.</li></ul>",
    bgColor: "bg-gradient-to-l from-[#0c3125] to-[#144d3c]",
    textColor: "text-white",
    icon: "fas fa-lightbulb",
    route: "/services/mep",
    button: "Discover Our Expertise",
    pos: "left"
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div id="container" className="min-h-screen font-sans text-base md:text-lg my-10">
      <header id="header" className="py-6 px-4 md:px-12 my-16">
        <div
          id="main-title"
          className="text-2xl md:text-4xl font-bold flex flex-col md:flex-row justify-between items-end md:items-center"
        >
          <h2 className="w-full text-center">
            Our Services
          </h2>
        </div>
      </header>
      <div className="space-y-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`flex flex-col md:flex-row md:items-center ${index % 2 === 0
                ? "md:flex-row rounded-l-full md:ml-6 items-end"
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
              className={`info flex flex-col items-left flex-1 mx-4 md:mx-8 p-4 ${index % 2 === 0 ? "md:border-l mr-0 pr-0" : "md:border-r ml-0 pl-0"
                } border-white ${service.textColor}`}
            >
              <div className="text-xl md:text-2xl font-bold">{service.title}</div>
              <div className="text-sm md:text-lg font-light mt-1">{service.subtitle}</div>
              <p
                className="mt-2 md:mt-4 text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: service.description }}
              ></p>

              {/* Know More Button */}
              <div className={`mt-4 flex justify-start md:justify-start md:self-start ${index%2 || "self-end"}`}>
                <Link
                  to={service.route}
                  className={`inline-block px-4 py-2 mt-2 font-medium text-sm md:text-base rounded-lg ${index % 2 === 0
                      ? "bg-[#e6f586] text-[#0c3125]"
                      : "bg-white text-[#0c3125]"
                    } hover:shadow-lg`}
                >
                  {service.button}
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
