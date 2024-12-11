import React from 'react';
import "../images/WhoWeAre.jpeg"
interface Props { }

const WhoWeAre: React.FC<Props> = () => {
    return (
        <div className="container mx-auto py-12">
            <div className='flex flex-col md:flex-row'>
                <div className="flex-1 flex-col items-center text-center px-5 py-10 md:py-20">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        We are a strategic growth company with undeniable conviction.
                    </h2>
                
                    <p className="text-lg text-gray-600 mb-8">
                        Sustain.ability is a leading offshore engineering services firm. We boast world-class development teams with extensive domain expertise and exceptional project management capabilities. Our seamless, scalable, and cost-efficient offshoring model transforms complex business challenges into tangible business opportunities.
                    </p>
                </div>
                <div className="flex-1 flex-col items-center text-center md:items-start md:text-start md:ml-16">
                    <img
                        src="WhoWeAre.jpeg"
                        alt="Three people working together"
                        className="w-full max-w-xl rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;