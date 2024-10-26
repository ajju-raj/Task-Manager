import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/fast-task-logo.webp';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-[#f76c6c]"> {/* Updated color */}
        <Link to="/">
          <img src={logo} alt="Task Manager Logo" className="h-10 w-auto" />
        </Link>
        <Link to="/login">
          <button className="bg-white text-[#f76c6c] px-4 py-2 rounded-md">
            Login / Signup
          </button>
        </Link>
      </nav>
      {/* Bold Separator Line */}
      <div className="border-t-4 border-[#f76c6c]"></div>
    </>
  );
};

export default Navbar;
