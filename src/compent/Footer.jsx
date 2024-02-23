// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick links</h3>
            <ul>
              <li>Become a member</li>
              <li>Become a volunteer</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          {/* Add similar sections for other content */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
