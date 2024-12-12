import React from 'react';
import "../images/Work.jpeg"
const CareersSection: React.FC = () => {
  return (
    <>
    <div className="bg-baseGreen text-white h-auto py-32 px-6 md:px-20 lg:px-32">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="bg-primary p-12 rounded-md shadow-lg">
          <p className="text-lg md:text-xl text-textHighlight leading-relaxed">
            “Our people have always been and will always be our #1 priority. They are the heart of our organization, our greatest asset, and the biggest driver behind our success. We lead with people and deliver with purpose.”
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
            We live at the leading-edge of machine learning and artificial intelligence. But it’s our people that make Sustain.ability an industry leader in digital marketing. Technology will always be integral to our work, but talent is why clients work with us. Think you’ve got what it takes to be on our team?
          </p>
          <button
            className="mt-6 bg-black hover:bg-secondary hover:text-primary transition text-white py-2 px-4 rounded-full shadow-md text-sm font-medium"
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
