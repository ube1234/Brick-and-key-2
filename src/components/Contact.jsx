
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-700">Brick and Key, Tamil Nadu 600100</p>
            <p className="text-lg text-gray-700">Land Line: +044 47 82 17 62</p>
            <p className="text-lg text-gray-700">Mobile: +91 8778579488 / +91 9551683364</p>
            <p className="text-lg text-gray-700">Email: contact@brickandkey.in</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Full Name</label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none" id="name" type="text" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email Address</label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none" id="email" type="email" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none" id="message" placeholder="Your Message"></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700" type="button">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
