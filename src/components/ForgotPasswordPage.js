import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffe5e5]">
      <div className="bg-white p-12 rounded-xl shadow-lg w-96 md:w-[500px] mx-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Forgot Password</h2>
        <form>
          <div className="mb-6">
            <label className="block mb-3 text-lg" htmlFor="email">
              Enter your email:
            </label>
            <input 
              className="border border-gray-300 p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#f76c6c]" 
              type="email" 
              id="email" 
              required 
            />
          </div>
          <button 
            className="bg-[#f76c6c] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#e55c5c] transition-colors duration-200 mb-6" 
            type="submit"
          >
            Send Reset Link
          </button>
        </form>
        <div className="text-center">
          <p className="text-lg">
            Remembered your password? {" "}
            <Link to="/login" className="text-[#f76c6c] hover:underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;