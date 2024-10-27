import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import logo from '../assets/fast-task-logo.webp';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-screen shadow-lg">
      <nav className="bg-[#f76c6c] w-screen"> 
        <div className="max-w-9xl mx-auto px-4">
          <div className="flex justify-between items-center p-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Fast-Task Logo"
                className="h-10 w-auto rounded-lg shadow-md transition-transform hover:scale-105"
              />
              <span className="text-white font-bold text-xl hidden sm:block">FastTask</span>
            </Link>

            {/* Mobile Menu Button */}
            <button className="sm:hidden text-white">
              <Menu size={24} />
            </button>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden sm:flex space-x-6">
              {['General', 'Daily', 'Weekly', 'Monthly', 'Yearly', 'Contact Us'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="text-white hover:text-pink-100 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Search Bar */}
            <form 
              className="hidden sm:flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-inner"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Search tasks..."
                className="outline-none text-sm text-gray-800 w-32 sm:w-48" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-[#f76c6c]">
                <Search size={20} />
              </button>
            </form>

            {/* Login and Sign Up Buttons */}
            <div className="hidden sm:flex space-x-4">
              <Link to="/login">
                <button className="bg-white text-[#f76c6c] px-6 py-2 rounded-full font-semibold text-sm hover:bg-pink-50 transition-colors duration-200 shadow-md">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-[#f76c6c] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#f54b4b] transition-colors duration-200 shadow-md">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-1 bg-[#f76c6c]"></div>
    </div>
  );
};

export default Navbar;
