import React from 'react';
import "../images/WhoWeAre.jpeg"
interface Props { }

const WhoWeAre: React.FC<Props> = () => {
    return (
        <div className="container mx-auto py-12 lg:px-12 md:px-12 px-6">

            <div className='flex flex-col md:flex-row'>

                <div className="flex-1 flex flex-col gap-y-2 items-start text-left px-5 py-10 md:py-20">
                    <div>
                        <span className="inline-block rounded-full bg-primary text-white px-3 py-1 text-sm font-semibold">
                            WHO WE ARE
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    We are the architects of possibilities, empowering businesses with cutting-edge design and engineering solutions.
                    </h2>

                    <p className="text-lg text-gray-600 mb-8">


                        AssistArchitect is a global design consultancy redefining how architecture and construction firms achieve their vision. With expertise spanning structural design, MEP systems, BIM services, and 3D visualization, we transform ideas into reality. Our commitment to innovation, precision, and efficiency allows us to tackle complex challenges and deliver exceptional outcomes, time after time.
                    </p>
                </div>

                <div className="flex-1 flex-col items-center lg:p-12 text-center md:items-start md:text-start md:ml-16">
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