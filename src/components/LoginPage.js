import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffe5e5]">
      <div className="bg-white p-12 rounded-xl shadow-lg w-96 md:w-[500px] mx-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>
        <form>
          <div className="mb-6">
            <label className="block mb-3 text-lg" htmlFor="email">Email:</label>
            <input 
              className="border border-gray-300 p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#f76c6c]" 
              type="email" 
              id="email" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block mb-3 text-lg" htmlFor="password">Password:</label>
            <input 
              className="border border-gray-300 p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#f76c6c]" 
              type="password" 
              id="password" 
              required 
            />
          </div>
          <div className="flex justify-between mb-6">
            <Link to="/forgot-password" className="text-[#f76c6c] text-lg hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button 
            className="bg-[#f76c6c] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#e55c5c] transition-colors duration-200" 
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-lg">
            New User? {" "}
            <Link to="/signup" className="text-[#f76c6c] hover:underline font-medium">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;