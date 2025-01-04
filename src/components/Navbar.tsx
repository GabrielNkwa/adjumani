// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          ADJUMANI
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-4 absolute md:static bg-blue-600 w-full md:w-auto top-12 left-0 md:bg-transparent`}
        >
          <li>
            <Link to="/" className="text-white hover:underline p-2 md:p-0">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:underline p-2 md:p-0">
              About
            </Link>
          </li>
          <li>
            <Link to="/works" className="text-white hover:underline p-2 md:p-0">
              Our Works
            </Link>
          </li>
          <li>
            <Link
              to="/involved"
              className="text-white hover:underline p-2 md:p-0"
            >
              Get Involved
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:underline p-2 md:p-0"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
