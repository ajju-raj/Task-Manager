import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/fast-task-logo.webp'; // Adjust path based on your folder structure

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500">
      {/* Link the logo image to the homepage */}
      <Link to="/">
        <img src={logo} alt="Task Manager Logo" className="h-10 w-auto" />
      </Link>
      <Link to="/login">
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
          Login / Signup
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
