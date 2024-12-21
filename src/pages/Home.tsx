import React from 'react'
import HeroImage from "../images/hero.png";
import ArrowUpRightIcon from '../icons/ArrowUpRightIcon';
import Marquee from '../components/Marquee';
import QuoteIcon from '../icons/QuoteIcon';
import MayorEmilyGreene from '../images/mayor-emily-greene.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen my-10 lg:my-4 bg-white p-6 lg:p-10"> {/* Increased padding on large screens */}


      {/* Header */}
      {/* <header className="flex justify-between items-center w-full max-w-5xl p-6 lg:p-8 rounded-full bg-[#0c3125] text-white">
        <h1 className="text-2xl lg:text-3xl tracking-tight">
          <span>Sustain·</span><span className='font-semibold'>ability</span>
        </h1>
        <button className="flex items-center gap-1 bg-transparent text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-green-900 transition">
          Get Growing <ArrowUpRightIcon />
        </button>
      </header> */}

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl w-full">
        {/* Text Section */}
        <section className="flex flex-col items-center bg-[#e8f787] p-12 lg:p-16 rounded-3xl text-center md:text-left h-full">
          <h2 className="text-5xl lg:text-4xl font-medium text-center text-[#142e1e] leading-tight">
            Empowering Architecture & Construction with Tailored Design Solutions
          </h2>
          <p className="text-lg lg:text-xl text-center text-[#142e1e] mt-6">
            Innovative engineering and design solutions for architecture and construction firms worldwide. From intelligent structures to immersive 3D visuals, we bring your vision to life—efficiently and seamlessly.
          </p>
          <button className="flex items-center gap-1 mt-8 px-8 py-3 border border-green-900 text-[#142e1e] rounded-full hover:bg-green-900 hover:text-white transition">
            Get growing <ArrowUpRightIcon />
          </button>
        </section>

        {/* Image Section */}
        <section className="h-full">
          <img
            src={HeroImage}
            alt="Sustainable city concept"
            className="rounded-3xl shadow-lg object-cover w-full h-full"
          />
        </section>
      </div>

      <Marquee />

      <section className="relative w-full flex flex-col items-center text-center py-20 bg-white max-w-5xl">
        {/* Decorative Images */}
        <div className="absolute hidden md:block md:left-5 md:top-8 lg:left-0">
          <img
            src="https://via.placeholder.com/100" // Replace with the correct image URL
            alt="Decorative image 1"
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover"
          />
        </div>
        <div className="absolute hidden md:block md:left-20 md:bottom-20 lg:left-40">
          <img
            src="https://via.placeholder.com/100" // Replace with the correct image URL
            alt="Decorative image 2"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div className="absolute hidden md:block md:right-5 md:top-8 lg:right-0">
          <img
            src="https://via.placeholder.com/100" // Replace with the correct image URL
            alt="Decorative image 3"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div className="absolute hidden md:block md:right-20 md:bottom-20 lg:right-40">
          <img
            src="https://via.placeholder.com/100" // Replace with the correct image URL
            alt="Decorative image 4"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>


        {/* Main Text */}
        <h2 className="text-4xl lg:text-4xl font-medium text-[#142e1e] mb-6">
          Innovating the Skyline, <br />One Design at a Time
        </h2>
        <p className="text-[#1b3425] text-xl font-medium max-w-3xl mb-10">


          At AssistArchitect, we’re committed to
          redefining what’s possible in architecture and
          construction. Our approach integrates
          cutting-edge technology with deep industry
          expertise to deliver designs that are not only
          intelligent but also impactful.
          <br />
          From conceptualization to execution, we
          partner with you to create smarter,
          sustainable spaces that drive success.
          Whether it’s crafting resilient structures,
          seamless systems, or immersive visuals,
          we’re here to bring your vision to life.
          <br />
          <br />
          <b>Why wait? Discover how AssistArchitect
            can transform your next project.</b>
        </p>
        {/* Call-to-Action Button */}
        <button className="flex items-center text-xl gap-1 px-8 py-4 border border-[#1b3425] text-[#1b3425] rounded-full hover:bg-[#1b3425] hover:text-white transition">
          Schedule a Consultation <ArrowUpRightIcon />
        </button>
      </section>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:w-3/4 lg:max-w-6xl mt-10">
        {/* Image Section */}
        <div className="col-span-2 lg:col-span-6">
          <img
            src={HeroImage}
            alt="Urban Green Spaces"
            className="w-full h-auto rounded-3xl max-h-[70vh] md:max-h-[50vh] object-cover"
          />
        </div>

        {/* Cards Section */}
        <div className="col-span-2 bg-[#f6f6f0] text-primary p-8 lg:px-12 rounded-3xl shadow-md">
          <div className='w-full flex flex-col items-end m-2'>
            <div className='border-2 border-primary cursor-pointer hover:text-white hover:bg-primary rounded-full h-16 w-16 transition overflow-hidden'>
              <div className='h-full w-full flex items-center justify-center hover:scale-125 transition'>
                <ArrowUpRightIcon />
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-medium mb-2 text-primary">Designs That Work Perfectly—The First Time​</h2>
          <p className="mb-4 text-xl text-primary">

            Our commitment to precision ensures every design, from structural frameworks to 3D models, is crafted with unparalleled accuracy. With AssistArchitect, you’ll avoid costly rework, ensuring smooth execution and seamless collaboration.
          </p>
        </div>

        <div className="col-span-2 bg-primary text-white p-8 lg:px-12 rounded-3xl shadow-md">
          <div className='w-full flex flex-col items-end m-2'>
            <div className='border-2 border-secondary cursor-pointer text-secondary hover:text-primary hover:bg-secondary rounded-full h-16 w-16 transition overflow-hidden'>
              <div className='h-full w-full flex items-center justify-center hover:scale-125 transition'>
                <ArrowUpRightIcon />
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-medium mb-2 text-secondary">Technology-Driven Solutions for a Competitive Edge​</h2>
          <p className="mb-4 text-xl text-white">


            We bring the power of cutting-edge technology, like BIM and advanced visualization tools, to every project. Experience streamlined workflows, faster decision-making, and designs optimized for sustainability and scalability.
          </p>
        </div>

        <div className="col-span-2 bg-secondary p-8 lg:px-12 rounded-3xl shadow-md">
          <div className='w-full flex flex-col items-end m-2'>
            <div className='border-2 border-primary cursor-pointer hover:text-secondary hover:bg-primary rounded-full h-16 w-16 transition overflow-hidden'>
              <div className='h-full w-full flex items-center justify-center hover:scale-125 transition'>
                <ArrowUpRightIcon />
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-medium mb-2 text-primary">World-Class Designs Delivered Cost-Effectively​</h2>
          <p className="mb-4 text-xl text-primary">


            Collaborate with an expert team in India, offering globally recognized standards at a fraction of the cost. We balance creativity with practicality to provide high-value solutions for your business.


          </p>
        </div>

        {/* Large Card Section */}
        <div className="col-span-2 lg:col-span-3 bg-green-800 text-white p-12 rounded-3xl shadow-md bg-image2">
          <h2 className="text-4xl 2xl:text-4xl font-medium mb-4 text-secondary">Building the Future, Today​</h2>
          <p className="mb-4 text-2xl pr-5">

            At AssistArchitect, our mission is clear: to empower architecture and construction firms with innovative, efficient, and future-ready design solutions. We believe every project is an opportunity to push boundaries, embrace creativity, and deliver value that lasts.

          </p>
          <button className="flex items-center gap-1 text-xl mt-6 px-6 py-4 border border-secondary text-secondary rounded-full hover:bg-secondary hover:text-primary transition">
            Partner with Us <ArrowUpRightIcon />
          </button>
        </div>

        {/* Info Section */}
        <div className="col-span-2 lg:col-span-3 bg-white p-8 lg:px-12 rounded-3xl text-primary">
          <h2 className="text-4xl font-semibold mb-4">Collaborative Innovation​</h2>
          <p className="mb-10 text-xl">
            We bring the best minds and the latest technology together to design smarter, better-performing buildings. Our approach is client-centric and deeply collaborative, ensuring your vision drives every solution.
          </p>
          <h2 className="text-4xl font-semibold mb-4">Efficiency Meets Creativity​</h2>
          <p className="mb-10 text-xl">
            Time and budget constraints? No problem. We streamline workflows, optimize resources, and bring creativity to life while meeting even the tightest deadlines.
          </p>
          <h2 className="text-4xl font-semibold mb-4">Global Expertise, Local Impact​</h2>
          <p className='text-xl'>
            Operating from India, we deliver world-class solutions for firms in the US, UK, and UAE. We understand your challenges and tailor our expertise to solve them.
          </p>
        </div>

        <div className="col-span-2 lg:col-span-6 relative w-full flex flex-col items-center text-center py-16 bg-white">
          {/* Main Text */}
          <h2 className="text-4xl lg:text-4xl font-medium text-primary mb-4">
            Trusted by Visionaries,<br /> Built for Excellence
          </h2>
          <p className="text-primary text-2xl font-medium w-3/4 my-8">
            We partner with leading architecture and construction firms to turn ideas into reality. Hear from our clients how our solutions have transformed their projects and delivered measurable results.
          </p>

          {/* Call-to-Action Button */}
          <button className="flex items-center text-xl gap-1 px-6 py-4 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
            Join Our Success Stories <ArrowUpRightIcon />
          </button>
        </div>

        <div className="col-span-2 lg:col-span-4 bg-secondary text-primary p-10 lg:p-12 rounded-3xl font-medium">
          <div className='border-2 border-primary text-primary text-2xl h-14 w-14 rounded-full flex items-center justify-center mb-10'>
            <QuoteIcon size={25} />
          </div>
          <p className='text-3xl leading-snug'>
            "Partnering with AssistArchitect was a turning point for our project. Their cutting-edge BIM services streamlined our workflow, reduced costs, and brought our vision to life with unmatched precision."


          </p>
          <p className='text-xl mt-4'>
            - [Client Name], CEO, [Company Name]
          </p>
        </div>

        <div className="hidden lg:block lg:col-span-2">
          <img
            src={MayorEmilyGreene}
            alt="Mayor Emily Greene"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>

        <div className="col-span-2 lg:col-span-6 bg-primary text-white p-20 lg:px-20 rounded-3xl font-medium text-center flex flex-col items-center">
          <h2 className='text-5xl 2xl:text-5xl text-secondary font-semibold'>
            Ready to Elevate Your Projects  <br /> to the Next Level?
          </h2>
          <p className='text-2xl my-10 font-medium lg:w-4/5'>
            Collaborate with AssistArchitect to unlock innovative design solutions, seamless project execution, and unparalleled global expertise. Let’s build extraordinary spaces—efficiently and effortlessly.
          </p>
          <button className="flex items-center text-xl gap-1 px-6 py-5 border border-secondary text-secondary rounded-full hover:bg-secondary hover:text-primary transition m-auto font-semibold">
            Get your Free Consultation <ArrowUpRightIcon />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home
