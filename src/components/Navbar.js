import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import logo from '../assets/fast-task-logo.webp';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Here you might want to implement the search functionality
  };

  const navLinks = ['General', 'Daily', 'Weekly', 'Monthly', 'Yearly', 'Contact Us'];

  return (
    <div className="w-screen shadow-lg">
      <nav className="bg-red-400">
        <div className="max-w-10xl mx-auto px-4">
          <div className="flex justify-between items-center p-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Fast-Task Logo"
                className="h-10 w-12 rounded-lg shadow-md hover:scale-125 transition-transform duration-200"
              />
              <span className="text-white font-bold text-xl hidden sm:block">FastTask</span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              aria-label="Toggle Mobile Menu"
              className="sm:hidden text-white hover:text-gray-200"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
            >
              <Menu size={24} />
            </button>

            {/* Navigation Links - Desktop */}
            <div className="hidden sm:flex space-x-6">
              {navLinks.map(item => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="text-white hover:text-gray-200 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <form 
              className="hidden sm:flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-md"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Search tasks..."
                className="outline-none text-sm text-gray-800 w-32 md:w-48"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-red-400 hover:text-red-500">
                <Search size={20} />
              </button>
            </form>

            {/* Auth Buttons - Desktop */}
            <div className="hidden sm:flex space-x-4">
              <Link to="/login">
                <button className="bg-white text-red-400 px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 shadow-md">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-red-400 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-red-500 transition-colors duration-200 shadow-md border border-transparent">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden bg-red-400 pb-4">
              <div className="flex flex-col space-y-2 px-4">
                {navLinks.map(item => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-white hover:text-gray-200 font-medium py-2 text-sm uppercase tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    {item}
                  </Link>
                ))}
                
                <form 
                  className="flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-md mt-4"
                  onSubmit={handleSearch}
                >
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    className="outline-none text-sm text-gray-800 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="text-red-400 hover:text-red-500">
                    <Search size={20} />
                  </button>
                </form>

                {/* Auth Buttons - Mobile */}
                <div className="flex space-x-4 mt-4">
                  <Link to="/login" className="flex-1">
                    <button className="w-full bg-white text-red-400 px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 shadow-md">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup" className="flex-1">
                    <button className="w-full bg-red-400 text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-red-500 transition-colors duration-200 shadow-md border border-white">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="h-1 bg-red-400"></div>
    </div>
  );
};

export default Navbar;
