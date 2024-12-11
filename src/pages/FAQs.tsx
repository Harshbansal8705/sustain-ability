import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons for expand/collapse

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
  { question: "What is your return policy?", answer: "Our return policy allows you to return items within 30 days of purchase." },
  { question: "How long does shipping take?", answer: "Shipping typically takes 5-7 business days." },
  { question: "Can I change my order?", answer: "Yes, you can change your order within 24 hours of placing it." },
  { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to select countries." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and Apple Pay." },
  { question: "How can I track my order?", answer: "Once your order has shipped, you will receive a tracking number via email." },
  { question: "What should I do if I receive a damaged item?", answer: "If you receive a damaged item, please contact our customer service within 48 hours for assistance." },
];
const FAQs: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredFAQs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto mt-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 mb-6">Find answers to common questions below.</p>
            <input
                type="text"
                className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            {filteredFAQs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <div
                        className="flex justify-between items-center bg-gray-100 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-200"
                        onClick={() => toggleAnswer(index)}
                    >
                        <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                        <span className="text-lg text-gray-600">
                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                        </span>
                    </div>
                    {openIndex === index && (
                        <div className="bg-gray-50 p-4 border border-gray-300 rounded-lg mt-2 transition-all duration-300 ease-in-out">
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQs;