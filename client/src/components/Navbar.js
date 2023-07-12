import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b-4 border-blue-700 text-center fixed top-0 bg-gray-900 font-bold w-full text-lg text-white">
      <ul>
        <li className="inline-block py-4 transform hover:scale-110 transition-all">
          <Link to="/" className="pl-6 pr-8">
            Home
          </Link>
        </li>
        <li className="inline-block py-4 transform hover:scale-110 transition-all">
          <Link to="/about" className="pl-8 pr-8">
            About
          </Link>
        </li>
        <li className="inline-block py-4 transform hover:scale-110 transition-all">
          <Link to="/articles-list" className="pl-8 pr-8">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
