// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src="path-to-your-logo.png" alt="Logo" className="h-10" />

        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Membership</a>
          <a href="#" className="hover:underline">Event</a>
          <a href="#" className="hover:underline">Gallery</a>
          <a href="#" className="hover:underline">MMN Initiatives</a>
          <a href="#" className="hover:underline">Contact us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;