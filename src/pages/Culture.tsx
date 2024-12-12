import { useState } from "react";

interface Card {
  number: number;
  title: string;
  description: string;
}

const CultureCard = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (cardNumber: number) => {
    setSelectedCard(cardNumber);
  };

  const cards: Card[] = [
    {
      number: 1,
      title: "Integrity, loyalty, and trust above all.",
      description:
        "We play it straight and keep it real, always keeping our word to build rock-solid relationships.",
    },
    {
      number: 2,
      title: "Maintain autonomy and freedom.",
      description:
        "We thrive on independence to fuel creativity, push boundaries, and achieve personal growth.",
    },
    {
      number: 3,
      title: "Challenge yourself regularly.",
      description:
        "We’re self-starters who master our craft by never settling for what’s easy.",
    },
    {
      number: 4,
      title: "Don’t dwell on problems, find solutions.",
      description: "Turn every hurdle into a springboard for new thinking.",
    },
    {
      number: 5,
      title: "Embrace change.",
      description:
        "Change is inevitable, so we own it as our special sauce for staying ahead of the game.",
    },
    {
      number: 6,
      title: "Always innovate.",
      description:
        "Defying what’s normal is what’s normal here. Rethinking and reinventing is in our DNA.",
    },
    {
      number: 7,
      title: "Go above what’s necessary.",
      description: "We strive for excellence and always go the extra mile.",
    },
    {
      number: 8,
      title: "Have fun, don’t take yourself too seriously.",
      description: "We believe in creating a positive and fun work environment.",
    },
  ];

  return (
    <div className="flex flex-col gap-y-10 px-4 py-8 my-4 sm:p-6 md:p-8">
      {/* Aligned "CULTURE" span */}
      <div className="lg:px-32">
        <span className="inline-block rounded-full bg-primary text-white px-3 py-1 text-sm font-semibold">
          CULTURE
        </span>
      </div>
      <h2 className="text-4xl font-bold lg:px-32 ">Our team delights in breaking the rules. Except these ones.</h2>
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:px-32">
        {cards.map((card) => (
          <div
            key={card.number}
            className={`bg-white rounded-lg shadow-md p-4 sm:p-6 transition-all duration-300 ${
              selectedCard === card.number
                ? "border-2 border-blue-500 scale-105"
                : "hover:scale-105"
            }`}
            onClick={() => handleCardClick(card.number)}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
              {card.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureCard;
