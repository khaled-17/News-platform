// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className=" text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src="path-to-your-logo.png" alt="Logo" className="h-10" />

        <nav className="flex space-x-4">
          <a href="#" className="hover:bg-orange-500 rounded-lg  py-6 px-1 ">Home</a>
          <a href="#" className="hover:bg-orange-500 rounded-lg  py-6 px-1 ">About us</a>
          <a href="#" className="hover:bg-orange-500 rounded-lg  py-6 px-1 ">Membership</a>
          <a href="#" className="hover:bg-orange-500 rounded-lg  py-6 px-1 ">Event</a>
          <a href="#" className="hover:bg-orange-500 rounded-lg  py-6 px-1 ">Gallery</a>
          <a href="#" className="hover:bg-orange-500 rounded-lg  py-6 px-1 ">MMN Initiatives</a>
          <a href="#" className="hover:bg-orange-500 rounded-lg  py-6 px-1 ">Contact us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;