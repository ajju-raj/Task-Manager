import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Separator under Navbar */}
      <div className="border-t-4 border-[#4ECDC4]"></div>
      
      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Left Pane (30%) */}
        <div className="w-1/3 bg-[#ffe5e5] p-4 border-r-4 border-[#4ECDC4]"> {/* Lighter background */}
          <h2 className="text-lg font-semibold">Left Pane</h2>
          <p>Content for the 30% section of the page.</p>
        </div>

        {/* Right Pane (70%) */}
        <div className="w-2/3 bg-white p-4">
          <h2 className="text-lg font-semibold">Right Pane</h2>
          <p>Content for the 70% section of the page.</p>
        </div>
      </div>

      {/* Separator above Footer */}
      <div className="border-t-4 border-[#4ECDC4]"></div>
    </div>
  );
};

export default Home;
