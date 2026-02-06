
import React from 'react';

const socialLinks = [
  { href: 'https://www.facebook.com/livehomesindia/', icon: '', label: 'Facebook' },
  { href: 'https://www.instagram.com/livehomes_india/', icon: '', label: 'Instagram' },
  { href: 'https://twitter.com/Livehomesindia', icon: '', label: 'Twitter' },
  { href: 'https://www.youtube.com/@livehomesindia', icon: '', label: 'YouTube' },
  { href: 'https://www.linkedin.com/company/livehomesindia', icon: '', label: 'LinkedIn' },
  { href: 'https://in.pinterest.com/livehomesindia/', icon: '', label: 'Pinterest' },
  { href: 'https://wa.me/+919551683364', icon: '', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="https://www.livehomes.in/public/image/logo.png" alt="Brick and Key Logo" className="h-10 mb-4" />
            <p>Chennai's No.1 Trusted Builder Property Site.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Properties</a></li>
              <li><a href="#" className="hover:text-blue-400">Home Loan</a></li>
              <li><a href="#" className="hover:text-blue-400">Join Venture</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p>Brick and Key, Tamil Nadu 600100</p>
            <p>Land Line: +044 47 82 17 62</p>
            <p>Mobile: +91 8778579488 / +91 9551683364</p>
            <p>Email: contact@brickandkey.in</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Social Presence</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full text-lg font-bold" title={link.label}>{link.icon}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p>&copy; 2026 Brick and Key and Properties in Chennai. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
