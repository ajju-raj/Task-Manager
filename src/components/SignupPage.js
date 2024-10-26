import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
      const message = response.data.message || "Unexpected response from server";
      alert(message);
    } catch (error) {
      console.error("Signup Error:", error);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffe5e5]">
      <div className="bg-white p-12 rounded-xl shadow-lg w-96 md:w-[500px] mx-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#f76c6c]">
          Create an Account
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-6">
            <label className="block mb-3 text-lg text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#f76c6c]"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-3 text-lg text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#f76c6c]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block mb-3 text-lg text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#f76c6c]"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
          <button
            className="bg-[#f76c6c] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#e55c5c] transition-colors duration-200"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-lg">
            Already have an account? {" "}
            <Link to="/login" className="text-[#f76c6c] hover:underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;