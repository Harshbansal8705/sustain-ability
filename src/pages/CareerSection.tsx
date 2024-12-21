import React from 'react';
import "../images/Work.jpeg"
const CareersSection: React.FC = () => {
  return (
    <>
      <div className="bg-baseGreen text-white h-auto py-32 px-6 md:px-20 lg:px-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="bg-primary p-12 rounded-md shadow-lg">
            <h3 className='text-lg lg:text-4xl text-white font-bold md:text-2xl text-textHighlight leading-relaxed mb-8'>  “Our People Are Our Strength”</h3>
            <p className="text-lg md:text-xl text-textHighlight leading-relaxed">

              "Our people have always been and will always be our #1 priority. They are the heart of our organization, our greatest asset, and the biggest driver behind our success. We lead with people and deliver with purpose."
            </p>
            <p className="mt-6 font-semibold">JULIE ZUBAK</p>
            <p className="text-sm">Chief People Officer</p>
          </div>

          {/* Right Section */}
          <div className="text-left">
            <div>
              <span className="inline-block rounded-full bg-white text-primary px-3 py-1 text-sm font-bold">
                CAREER
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">
              There’s nothing artificial about our people’s intelligence.
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              At AssistArchitect, we’re more than just cutting-edge technology. Our success is built on the incredible talent and intelligence of our team. From creative problem-solving to driving innovation, it’s our people who make us an industry leader in architectural and engineering design.

              Technology amplifies what we do, but it’s the people who shape the future. Think you’ve got the skills, passion, and creativity to join us?
            </p>
            <p className='mt-6 text-gray-300 leading-relaxed text-2xl font-bold'>Explore opportunities to grow with us.</p>
            <button
              className="mt-1 bg-black hover:bg-secondary hover:text-primary transition text-white py-2 px-4 rounded-full shadow-md text-sm font-medium"
              onClick={() => window.open('/careers', '_blank')}
            >
              View open positions ↗
            </button>
          </div>
        </div>

      </div>
      <div>
        <img src="Work.jpeg" alt="Work" className='w-full h-auto object-cover' />
      </div>
    </>
  );
};

export default CareersSection;
