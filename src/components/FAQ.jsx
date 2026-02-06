import React from 'react';

const faqs = [
  {
    q: 'Do you provide property management services?',
    a: 'Yes, we offer property management services for landlords who require assistance with managing their rental properties. Our services include finding tenants, collecting rent, handling maintenance issues, and ensuring compliance with legal requirements.',
  },
  {
    q: 'What is construction?',
    a: 'Construction is the process of building, assembling, or erecting structures, infrastructure, or facilities.',
  },
  {
    q: 'How do I choose an interior designer?',
    a: 'Look for designers with experience in projects similar to yours, check their portfolio, and ensure they understand your vision and budget.',
  },
  {
    q: 'What are the Current Interior Design trends?',
    a: 'Trends vary, but some popular ones include sustainable design, biophilic design (connecting with nature), and minimalist aesthetics.',
  },
  {
    q: 'What is Home Loan?',
    a: 'The borrower receives a lump sum of money from the lender, which is then repaid over time with interest, typically through monthly payments.',
  },
];

const FAQ = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Frequently Asked Questions</h2>
      <div className="relative">
        {/* Animated background shape */}
        <div className="absolute -bottom-16 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100 via-blue-300 to-white rounded-full blur-2xl opacity-30 -z-10 animate-pulse" />
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-8 bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-lg font-bold text-blue-700 mb-2 transition-colors duration-300 hover:text-blue-900">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;