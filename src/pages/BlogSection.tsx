import React from "react";

const BlogSection: React.FC = () => {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="text-white bg-primary text-sm font-semibold px-3 py-1 rounded-full">
              INSIGHTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            The Power Blog: A sneak peek of the future.
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
          Dive into cutting-edge insights and expert analyses on trends shaping architecture and construction. From groundbreaking innovations to future-forward strategies, The Power Blog equips you with the knowledge to stay ahead in a rapidly evolving industry.
          </p>
          <button className="mt-6 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full shadow hover:bg-textHighlight hover:text-primary transition">
            Browse all insights <span className="ml-2">&rarr;</span>
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src="https://via.placeholder.com/400x300" // Replace with actual image URL
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Q5 is Not a Break: How to Prepare Your Marketing Strategy for Q1 Growth
              </h3>
              <p className="text-sm text-gray-600 mb-4">Kylie Carrasco | December 3, 2024</p>
              <a
                href="#"
                className="text-primary font-medium hover:underline flex items-center"
              >
                Read more <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src="https://via.placeholder.com/400x300" // Replace with actual image URL
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Power Digital Awarded Agency Partner of the Year at the Buy with Prime Partner
                Summit
              </h3>
              <p className="text-sm text-gray-600 mb-4">Kylie Carrasco | December 4, 2024</p>
              <a
                href="#"
                className="text-primary font-medium hover:underline flex items-center"
              >
                Read more <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src="https://via.placeholder.com/400x300" // Replace with actual image URL
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customer Insights: Driving Data to Create Winning Strategies
              </h3>
              <p className="text-sm text-gray-600 mb-4">Kylie Carrasco | December 5, 2024</p>
              <a
                href="#"
                className="text-primary font-medium hover:underline flex items-center"
              >
                Read more <span className="ml-2">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
