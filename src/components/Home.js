import React, { useState } from 'react';

const Home = () => {
  const [activePage, setActivePage] = useState("General Task");

  const renderContent = () => {
    switch (activePage) {
      case "General Task":
        return <div>Content for General Task</div>;
      case "Task 1":
        return <div>Content for Task 1</div>;
      case "Task 2":
        return <div>Content for Task 2</div>;
      case "Task 3":
        return <div>Content for Task 3</div>;
      case "Task 4":
        return <div>Content for Task 4</div>;
      default:
        return <div>Welcome! Select a task to view its content.</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar and Separator */}
      <div className="border-t-4 border-[#f76c6c]"></div>
      
      {/* Main Content Area */}
      <div className="flex flex-1">
        
        {/* Left Pane (30%) */}
        <div className="w-1/3 bg-[#ffe5e5] p-4 border-r-4 border-[#f76c6c] flex flex-col gap-4">
          <button 
            className="w-41/50 bg-[#f76c6c] text-white p-2 rounded"
            onClick={() => setActivePage("General Task")}
          >
            General Task
          </button>
          
          <div className="flex flex-wrap gap-2">
            <button 
              className="w-[48%] bg-[#f76c6c] text-white p-2 rounded"
              onClick={() => setActivePage("Task 1")}
            >
              Daily Task
            </button>
            <button 
              className="w-[48%] bg-[#f76c6c] text-white p-2 rounded"
              onClick={() => setActivePage("Task 2")}
            >
              Weekly Task
            </button>
            <button 
              className="w-[48%] bg-[#f76c6c] text-white p-2 rounded"
              onClick={() => setActivePage("Task 3")}
            >
              Monthly Task
            </button>
            <button 
              className="w-[48%] bg-[#f76c6c] text-white p-2 rounded"
              onClick={() => setActivePage("Task 4")}
            >
              Yearly Task
            </button>
          </div>
        </div>

        {/* Right Pane (70%) */}
        <div className="w-2/3 bg-white p-4">
          <h2 className="text-lg font-semibold">{activePage}</h2>
          <div>{renderContent()}</div>
        </div>
      </div>

      {/* Separator above Footer */}
      <div className="border-t-4 border-[#f76c6c]"></div>
    </div>
  );
};

export default Home;
