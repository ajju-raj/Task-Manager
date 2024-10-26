import React from 'react';

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">Create an Account</h2>
        <form>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-4"
            placeholder="Enter your name"
          />
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-4"
            placeholder="Enter your email"
          />
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-4"
            placeholder="Create a password"
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
