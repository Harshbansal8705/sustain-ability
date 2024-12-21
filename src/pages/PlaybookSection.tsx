import React from 'react';
import "../images/person1.jpeg"

const PlaybookSection: React.FC = () => {
  return (
    <div className='h-auto my-20 px-6 md:px-16'>
      <section className="bg-baseGreen text-white p-8 rounded-lg md:flex md:items-center md:justify-between md:gap-8 lg:p-12">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="bg-white text-primary text-sm font-bold px-3 py-1 rounded-full">PLAYBOOK</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold leading-tight mb-4">
            Always playing to win.
          </h1>
          <div className='lg:flex gap-4'>
          
          <img
            src="person1.jpeg"
            alt="Jeff Mason"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 mx-auto md:mx-0"
          />
          <div className="text-center md:text-left">
            <h2 className="font-semibold">JEFF MASON</h2>
            <p className="text-sm text-gray-500">CEO @ Sustain.ability</p>
          </div>
          <p>“A team culture is our playbook. People ignite the vision, services deliver the value, and our products fulfill the promise. Together, with a play-to-win mentality, we transform our company into a powerful force and industry leader.”</p>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center md:items-start">
          <p className="text-sm sm:text-base text-textHighlight mb-6">
          Success isn’t a milestone; it’s a mindset. At AssistArchitect, every challenge is an opportunity to excel, innovate, and inspire. Our leadership team embodies this philosophy, driving the vision and cultivating a winning culture across every project.
          </p>
          <button
            className="px-6 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-secondary hover:text-primary transition-colors"
          >
            Meet Our Leadership Team ↗
            <span className="material-icons"></span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlaybookSection;
