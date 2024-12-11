import React, { useState } from 'react';
import "../images/FAQ.jpg"
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: 'What is our company about?', answer: 'We are a leading tech company focused on innovative solutions.' },
  { question: 'How do I contact support?', answer: 'You can contact support through our email or live chat on the website.' },
  { question: 'Do we offer international shipping?', answer: 'Yes, we offer worldwide shipping to most countries.' },
  { question: 'What payment methods do you accept?', answer: 'We accept credit cards, PayPal, and bank transfers.' },
  { question: 'What payment methods do you accept?', answer: 'We accept credit cards, PayPal, and bank transfers.' },
  { question: 'What payment methods do you accept?', answer: 'We accept credit cards, PayPal, and bank transfers.' },
  { question: 'What payment methods do you accept?', answer: 'We accept credit cards, PayPal, and bank transfers.' },
  { question: 'What payment methods do you accept?', answer: 'We accept credit cards, PayPal, and bank transfers.' },
  
];

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-center text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <div
                  onClick={() => handleToggle(index)}
                  className="cursor-pointer text-lg font-semibold text-left py-4 transition-all duration-300 ease-in-out"
                >
                  {faq.question}
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
                    openIndex === index ? 'max-h-screen py-4' : ''
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2 mt-8 lg:mt-0">
          <img src="FAQ.jpg" alt="FAQ Illustration" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
