import './App.css';
import HeroImage from "./images/hero.png";
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import Marquee from './components/Marquee';
import QuoteIcon from './icons/QuoteIcon';
import MayorEmilyGreene from './images/mayor-emily-greene.png';

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-4xl p-4 px-6 rounded-full bg-[#0c3125] text-white">
        <h1 className="text-2xl tracking-tight"><span>Sustain·</span><span className='font-semibold'>ability</span></h1>
        <button className="flex items-center gap-1 bg-transparent text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-green-900 transition">
          Get Growing <ArrowUpRightIcon />
        </button>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl w-full">
        {/* Text Section */}
        <section className="flex flex-col items-center bg-[#e8f787] p-10 rounded-3xl text-center md:text-left h-full">
          <h2 className="text-5xl font-medium text-center text-[#142e1e] leading-tight">
            Building a Greener Tomorrow, Today
          </h2>
          <p className="text-lg text-center text-[#142e1e] mt-4">
            Join us in the fight against climate change and help us create cities
            that thrive in harmony with nature.
          </p>
          <button className="flex items-center gap-1 mt-6 px-6 py-2 border border-green-900 text-[#142e1e] rounded-full hover:bg-green-900 hover:text-white transition">
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
      <section className="relative w-full flex flex-col items-center text-center py-16 bg-white">
        {/* Decorative Images */}
        <div className="absolute hidden md:block md:left-10 md:top-8 lg:left-40">
          <img
            src="https://via.placeholder.com/100" // Replace with the correct image URL
            alt="Decorative image 1"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="absolute hidden md:block md:left-32 md:bottom-20 lg:left-60">
          <img
            src="https://via.placeholder.com/100" // Replace with the correct image URL
            alt="Decorative image 2"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="absolute hidden md:block md:right-10 md:top-8 lg:right-40">
          <img
            src="https://via.placeholder.com/100" // Replace with the correct image URL
            alt="Decorative image 3"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="absolute hidden md:block md:right-32 md:bottom-20 lg:right-60">
          <img
            src="https://via.placeholder.com/100" // Replace with the correct image URL
            alt="Decorative image 4"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        {/* Main Text */}
        <h2 className="text-4xl font-bold text-[#142e1e] mb-4">
          Reimagining Urban Spaces &<br /> Designing Green Cities of the Future
        </h2>
        <p className="text-[#1b3425] font-medium max-w-md mb-8">
          At Sustainability, our mission is clear: to create urban spaces, yards, and cities that are smart, eco-friendly, and sustainable.
          We're committed to fighting climate change and saving nature, one project at a time. Ready to see how you can transform your environment?
          Schedule a free consultation today!
        </p>

        {/* Call-to-Action Button */}
        <button className="flex items-center gap-1 px-6 py-3 border border-[#1b3425] text-[#1b3425] rounded-full hover:bg-[#1b3425] hover:text-white transition">
          Free Planning Consult <ArrowUpRightIcon />
        </button>
      </section>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:w-3/5">
        {/* Image Section */}
        <div className="col-span-2 lg:col-span-6">
          <img
            src={HeroImage}
            alt="Urban Green Spaces"
            className="w-full h-auto rounded-3xl max-h-[70vh] md:max-h-[50vh] object-cover"
          />
        </div>

        {/* Cards Section */}
        <div className="col-span-2 bg-[#f6f6f0] text-primary p-6 lg:px-10 rounded-3xl shadow-md">
          <div className='w-full flex flex-col items-end m-2'>
            <div className='border-2 border-primary cursor-pointer hover:text-white hover:bg-primary rounded-full h-16 w-16 transition overflow-hidden'>
              <div className='h-full w-full flex items-center justify-center hover:scale-125 transition'>
                <ArrowUpRightIcon />
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-primary">Global Environmental Impact</h2>
          <p className="mb-4 text-primary">
            By integrating green spaces and eco-friendly technologies into urban environments,
            we reduce carbon emissions, improve air quality, and combat the effects of climate change.
          </p>
        </div>

        <div className="col-span-2 bg-primary text-white p-6 lg:px-10 rounded-3xl shadow-md">
          <div className='w-full flex flex-col items-end m-2'>
            <div className='border-2 border-secondary cursor-pointer text-secondary hover:text-primary hover:bg-secondary rounded-full h-16 w-16 transition overflow-hidden'>
              <div className='h-full w-full flex items-center justify-center hover:scale-125 transition'>
                <ArrowUpRightIcon />
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-secondary">Improved Quality of Life for You & the World</h2>
          <p className="mb-4 text-white">
            Our sustainable designs create healthier, happier communities by providing access to green
            spaces, promoting active lifestyles, and fostering a sense of connection to nature.
          </p>
        </div>

        <div className="col-span-2 bg-secondary p-6 lg:px-10 rounded-3xl shadow-md">
          <div className='w-full flex flex-col items-end m-2'>
            <div className='border-2 border-primary cursor-pointer hover:text-secondary hover:bg-primary rounded-full h-16 w-16 transition overflow-hidden'>
              <div className='h-full w-full flex items-center justify-center hover:scale-125 transition'>
                <ArrowUpRightIcon />
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-primary">Long-Term Savings: For your Wallet & Earth</h2>
          <p className="mb-4 text-primary">
            Investing in sustainable infrastructure pays off in the long run, saving cities money on energy costs, water usage, and maintenance expenses.
          </p>
        </div>

        {/* Large Card Section */}
        <div className="col-span-2 lg:col-span-3 bg-green-800 text-white p-10 rounded-3xl shadow-md bg-image2 lg:mr-10">
          <h2 className="text-4xl 2xl:text-6xl font-medium mb-4 text-secondary">Nourishing People & the Planet</h2>
          <p className="mb-4 font-semibold text-lg pr-5">
            Our vision is to lead the way in sustainable urban design, creating cities that are resilient, livable, and flourishing.
          </p>
          <button className="flex items-center gap-1 text-xl mt-6 px-6 py-4 border border-secondary text-secondary rounded-full hover:bg-secondary hover:text-primary transition">
            Free Planning Consult <ArrowUpRightIcon />
          </button>
        </div>

        {/* Info Section */}
        <div className="col-span-2 lg:col-span-3 bg-white p-6 rounded-3xl text-primary">
          <h2 className="text-2xl font-semibold mb-4">Innovative Green Solutions</h2>
          <p className="mb-10">
            At Sustainability, we specialize in transforming urban spaces into green havens by incorporating innovative solutions such as rooftop gardens, smart irrigation systems, green infrastructure design, and more. Our goal is to enhance the quality of life for city dwellers while minimizing our impact on the environment.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Sustainability as a Way of Life</h2>
          <p className="mb-10">
            We believe that sustainability is not just a buzzword – it's a way of life. That's why our approach is rooted in collaboration, innovation, and a deep respect for nature. We work closely with communities, stakeholders, and policymakers to design customized solutions that meet the unique needs of each city.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Transforming Cities & Lives</h2>
          <p>
            We work with cities and communities worldwide to promote sustainable urban development. We specialize in a wide range of projects, including green infrastructure design, rooftop garden installations, smart irrigation systems, and more.
          </p>
        </div>
        <div className="col-span-2 lg:col-span-6 relative w-full flex flex-col items-center text-center py-16 bg-white">
          {/* Main Text */}
          <h2 className="text-4xl font-bold text-primary mb-4">
            Helping Cities & Communities<br /> Combat Climate Change
          </h2>
          <p className="text-primary font-medium max-w-lg mb-8">
            We're committed to fighting climate change and saving nature, one project at a time. Ready to see how you can transform your environment? Schedule a free consultation today!
          </p>

          {/* Call-to-Action Button */}
          <button className="flex items-center gap-1 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
            Join now <ArrowUpRightIcon />
          </button>
        </div>

        <div className="col-span-2 lg:col-span-4 bg-secondary text-primary p-10 rounded-3xl font-medium">
          <div className='border-2 border-primary text-primary text-2xl h-14 w-14 rounded-full flex items-center justify-center mb-10'>
            <QuoteIcon size={25} />
          </div>
          <p className='text-3xl'>
            Working with Sustain·ability was a game- changer for our city. Their innovative solutions not only helped us combat climate change but also revitalized our urban landscape.
          </p>
          <p className='text-md mt-4'>
            Mayor Emily Greene
          </p>
        </div>
        <div className="hidden lg:block lg:col-span-2">
          <img
            src={MayorEmilyGreene}
            alt="Mayor Emily Greene"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>
        <div className="col-span-2 lg:col-span-6 bg-primary text-white p-10 px-20 rounded-3xl font-medium text-center">
          <h2 className='text-5xl text-secondary font-medium'>
            Ready to transform your city <br /> into a green paradise?
          </h2>
          <p className='text-lg my-6 font-semibold'>
            Schedule a free consultation with Sustain·ability today and let's start building a brighter, greener future together.
          </p>
          <button className="flex items-center gap-1 px-6 py-3 border border-secondary text-secondary rounded-full hover:bg-secondary hover:text-primary transition m-auto font-semibold">
            Get your Free Consult <ArrowUpRightIcon />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className='my-10 text-primary text-center'>
      <p className='text-center'>
        &copy;2024 Sustain·ability. All rights reserved. <a href="#" className='underline'>Privacy Policy</a>
      </p>
      <p className="text-2xl tracking-tight my-5"><span>Sustain·</span><span className='font-semibold'>ability</span></p>
      </div>
    </div>
  );
}

export default App;
