import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Client {
  name: string;
  experience: string;
}

const clients: Client[] = [
  { name: 'John Doe', experience: 'Amazing service and incredible results. I am very satisfied!' },
  { name: 'Jane Smith', experience: 'I had a great experience working with this team, highly recommend!' },
  { name: 'Sam Wilson', experience: 'Professional and dedicated, they exceeded all my expectations.' },
  { name: 'Sarah Lee', experience: 'Exceptional service! My expectations were not only met but surpassed.' },
  { name: 'Michael Brown', experience: 'A fantastic experience from start to finish. Highly skilled team!' },
  { name: 'Emily Davis', experience: 'They transformed my ideas into reality. Truly impressive work!' },
];

const HappyClientsCarousel: React.FC = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Auto move after 3 seconds
    ref: sliderRef,
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  return (
    <div className="w-full py-12 bg-gray-200"> {/* Changed to light gray background */}
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Happy Clients</h2>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <p className="text-xl font-semibold text-gray-800">{client.name}</p>
              <p className="text-gray-600 mt-2 italic">"{client.experience}"</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HappyClientsCarousel;