import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c3125] mb-8 text-center">
          Contact Us
        </h2>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-[#0c3125] mb-4">
              We'd Love to Hear From You!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Have questions about our services, or need help with a project?
              Our team is here to assist you. Get in touch by filling out the
              form, and we'll get back to you as soon as possible.
            </p>

            {/* Social Media Section */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-[#0c3125] mb-3">
                Connect with us on Social Media
              </h4>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0c3125] hover:text-green-800 transition"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.492v-9.294H9.691v-3.622h3.125V8.413c0-3.1 1.892-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.505 0-1.796.715-1.796 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0c3125] hover:text-green-800 transition"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.002.974-3.127 1.195-.897-.955-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.735-.666 1.587-.666 2.495 0 1.722.87 3.245 2.188 4.14-.807-.026-1.566-.248-2.228-.616v.061c0 2.404 1.71 4.405 3.978 4.857-.416.112-.855.171-1.306.171-.321 0-.633-.03-.935-.086.633 1.975 2.47 3.415 4.648 3.456-1.7 1.33-3.849 2.122-6.188 2.122-.402 0-.8-.024-1.191-.072 2.209 1.416 4.831 2.243 7.65 2.243 9.158 0 14.169-7.583 14.169-14.169 0-.216-.005-.431-.014-.645.975-.705 1.822-1.58 2.496-2.578z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0c3125] hover:text-green-800 transition"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .775 0 1.727v20.545C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.775 1.77-1.727V1.727C24 .775 23.21 0 22.23 0zM7.12 20.452H3.71V9h3.41v11.452zM5.415 7.797c-1.1 0-1.987-.895-1.987-1.996 0-1.101.886-1.996 1.987-1.996s1.987.895 1.987 1.996c0 1.101-.887 1.996-1.987 1.996zM20.452 20.452h-3.412v-5.794c0-1.38-.025-3.156-1.926-3.156-1.93 0-2.227 1.507-2.227 3.064v5.886H9.48V9h3.278v1.561h.045c.457-.868 1.574-1.784 3.239-1.784 3.462 0 4.1 2.276 4.1 5.233v6.442z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="md:w-1/2 bg-[#0c3125] rounded-lg shadow-lg p-6 md:p-10">
            <form>
              {/* Full Name */}
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-[#e6f586] font-medium mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-800"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[#e6f586] font-medium mb-1"
                >
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="youremail@example.com"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-800"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-[#e6f586] font-medium mb-1"
                >
                  Phone *
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="123-456-7890"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-800"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-[#e6f586] font-medium mb-1"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-800"
                  rows={4}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1f5c49] text-[#e6f586] text-lg font-medium py-3 rounded-md hover:bg-[#164737] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
