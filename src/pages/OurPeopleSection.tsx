import React, { useState } from 'react';

const OurPeopleSection: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);

  const people = [
    { id: 1, name: 'John Doe', role: 'CEO', image: '/path/to/image1.jpg', description: 'John is the visionary leader of our company.' },
    { id: 2, name: 'Jane Smith', role: 'CTO', image: '/path/to/image2.jpg', description: 'Jane drives our technology strategy and innovation.' },
    { id: 3, name: 'Sam Wilson', role: 'CFO', image: '/path/to/image3.jpg', description: 'Sam manages our financial health and growth.' },
    { id: 4, name: 'Sarah Lee', role: 'CMO', image: '/path/to/image4.jpg', description: 'Sarah leads our marketing efforts and brand strategy.' },
  ];

  const handlePersonClick = (id: number) => {
    setSelectedPerson(id);
  };

  const closeModal = () => {
    setSelectedPerson(null);
  };

  return (
    <section className="py-16 px-5">
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="typing-animation"><span className="text-gray-600">MEET </span>Our Team</span>
        <span className="blinking-cursor">|</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {people.map((person) => (
          <div
            key={person.id}
            className="relative group bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => handlePersonClick(person.id)}
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-gray-500">{person.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for more information */}
      {selectedPerson !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-2">{people[selectedPerson - 1].name}</h3>
            <p className="text-gray-600 mb-4">{people[selectedPerson - 1].description}</p>
            <button
              className="bg-amber-300 text-white py-2 px-4 rounded-lg hover:bg-amber-400 transition-colors duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurPeopleSection;