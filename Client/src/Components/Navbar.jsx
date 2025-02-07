import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 w-[95%] m-auto mt-[10px] rounded-[10px]">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">Yazan Academy</a>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Buy Our Book</a></li>
          <li><a href="#" className="hover:text-gray-400">Book Now</a></li>
        </ul>
        <button className="md:hidden text-xl">&#9776;</button>
      </div>
    </nav>
  );
}

export default Navbar;