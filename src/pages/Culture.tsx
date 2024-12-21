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
      title: "Integrity, loyalty, and trust above all",
      description:
        "We believe in building relationships on the foundation of honesty and transparency. Our word is our bond, and we ensure our partnerships are rock-solid and enduring.",
    },
    {
      number: 2,
      title: "Fostering Creativity Through Autonomy",
      description:
        "We thrive on independence, giving our team the freedom to explore innovative ideas, push creative boundaries, and grow personally and professionally.",
    },
    {
      number: 3,
      title: "Continuous Growth Through Challenges",
      description:
        "We embrace challenges as opportunities to grow. By stepping out of our comfort zones and mastering our craft, we redefine what’s possible in every project.",
    },
    {
      number: 4,
      title: "Turn Challenges into Opportunities",
      description: "We don’t dwell on problems; we solve them. Every obstacle is a chance to rethink, innovate, and pave the way forward with creative solutions.",
    },
    {
      number: 5,
      title: "Embrace Change, Lead the Way",
      description:
        "Change is inevitable, and we see it as an opportunity. By staying adaptable, we don’t just keep up—we set the pace.",
    },
    {
      number: 6,
      title: "Innovation is in Our DNA",
      description:
        "We don’t follow trends; we create them. Rethinking and reinventing are not just practices—they’re our way of life.",
    },
    {
      number: 7,
      title: "Strive for Excellence, Always.",
      description: "Going the extra mile isn’t optional—it’s who we are. We deliver more than what’s expected, every single time.",
    },
    {
      number: 8,
      title: "Work Hard, Have Fun",
      description: "Excellence doesn’t mean we forget to enjoy the journey. We foster an environment where positivity and creativity thrive.",
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
