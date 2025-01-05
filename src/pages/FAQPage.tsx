const FAQPage = () => {
  return (
    <div>
      {/* Portfolio Section */}
      <div className="bg-[#f3f4f6] py-12">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-3xl font-bold text-[#0c3125] mb-8">Our Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://via.placeholder.com/400"
                alt="Project 1"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#0c3125]">Project Title 1</h3>
              <p className="text-gray-600 mt-2">
                A short description of the project goes here. It highlights the main features and
                technologies used.
              </p>
              <a
                href="#"
                className="text-green-400 hover:text-green-500 mt-4 inline-block"
              >
                View Project
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://via.placeholder.com/400"
                alt="Project 2"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#0c3125]">Project Title 2</h3>
              <p className="text-gray-600 mt-2">
                A short description of the project goes here. It highlights the main features and
                technologies used.
              </p>
              <a
                href="#"
                className="text-green-400 hover:text-green-500 mt-4 inline-block"
              >
                View Project
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src="https://via.placeholder.com/400"
                alt="Project 3"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#0c3125]">Project Title 3</h3>
              <p className="text-gray-600 mt-2">
                A short description of the project goes here. It highlights the main features and
                technologies used.
              </p>
              <a
                href="#"
                className="text-green-400 hover:text-green-500 mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
