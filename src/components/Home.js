import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const Home = () => {
  // Existing state
  const [activePage, setActivePage] = useState("General Task");
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [deadline, setDeadline] = useState("");
  
  // New state for expanded tasks
  const [expandedTasks, setExpandedTasks] = useState({});

  // Color schemes
  const colorSchemes = [
    { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-100' },
    { bg: 'bg-green-50', text: 'text-green-800', border: 'border-green-100' },
    { bg: 'bg-purple-50', text: 'text-purple-800', border: 'border-purple-100' },
    { bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-100' },
    { bg: 'bg-pink-50', text: 'text-pink-800', border: 'border-pink-100' },
    { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-100' },
    { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-100' },
    { bg: 'bg-orange-50', text: 'text-orange-800', border: 'border-orange-100' },
  ];

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem(activePage)) || [];
    setTasks(savedTasks);
    setExpandedTasks({}); // Reset expanded state when changing pages
  }, [activePage]);

  const getRandomColorScheme = () => {
    return colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
  };

  const toggleTaskExpansion = (taskId) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const handleAddTask = () => {
    setShowTaskInput(true);
    setEditingTaskIndex(null);
    setTaskTitle("");
    setTaskDescription("");
    setDeadline("");
  };

  const handleSaveTask = () => {
    const colorScheme = getRandomColorScheme();
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      deadline,
      colorScheme,
      id: Date.now() // Add unique ID for each task
    };

    const updatedTasks = editingTaskIndex !== null 
      ? tasks.map((task, index) => index === editingTaskIndex ? newTask : task)
      : [...tasks, newTask];

    setTasks(updatedTasks);
    localStorage.setItem(activePage, JSON.stringify(updatedTasks));
    setShowTaskInput(false);
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTaskTitle(taskToEdit.title);
    setTaskDescription(taskToEdit.description);
    setDeadline(taskToEdit.deadline || "");
    setEditingTaskIndex(index);
    setShowTaskInput(true);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
    localStorage.setItem(activePage, JSON.stringify(updatedTasks));
  };

  const renderContent = () => {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-[#f76c6c] text-center">
          {activePage}
        </h1>

        <div className="w-full max-w-3xl">
          {tasks.map((task, index) => (
            <div 
              key={task.id || index} 
              className={`${task.colorScheme?.bg} border ${task.colorScheme?.border} p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className={`text-xl font-semibold ${task.colorScheme?.text} mb-2`}>
                    {task.title}
                  </h4>
                  <div className="relative">
                    <p className={`${task.colorScheme?.text} opacity-90 ${
                      !expandedTasks[task.id] ? 'line-clamp-2' : ''
                    }`}>
                      {task.description}
                    </p>
                    {task.description.length > 100 && (
                      <button
                        onClick={() => toggleTaskExpansion(task.id)}
                        className={`${task.colorScheme?.text} mt-1 text-sm flex items-center hover:opacity-75`}
                      >
                        {expandedTasks[task.id] ? (
                          <><ChevronUp size={16} className="mr-1" /> Show less</>
                        ) : (
                          <><ChevronDown size={16} className="mr-1" /> Read more</>
                        )}
                      </button>
                    )}
                  </div>
                  {task.deadline && (
                    <p className={`text-sm ${task.colorScheme?.text} opacity-75 flex items-center mt-2`}>
                      <Calendar size={16} className="mr-1" />
                      {new Date(task.deadline).toLocaleString()}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 ml-4">
                  <button 
                    className={`p-2 ${task.colorScheme?.text} hover:opacity-75 rounded-full transition-colors duration-200`}
                    onClick={() => handleEditTask(index)}
                  >
                    <Edit2 size={20} />
                  </button>
                  <button 
                    className={`p-2 ${task.colorScheme?.text} hover:opacity-75 rounded-full transition-colors duration-200`}
                    onClick={() => handleDeleteTask(index)}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {showTaskInput && (
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <input
                type="text"
                placeholder="Task Title"
                className="w-full mb-4 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f76c6c]"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <textarea
                placeholder="Task Description"
                className="w-full p-3 border border-gray-200 rounded-lg mb-4 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#f76c6c]"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
              <input
                type="datetime-local"
                className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#f76c6c]"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
              <button 
                className="w-full bg-[#f76c6c] text-white py-3 rounded-lg hover:bg-[#e55c5c] transition-colors duration-200"
                onClick={handleSaveTask}
              >
                Save Task
              </button>
            </div>
          )}

          <button 
            className="mx-auto flex items-center justify-center px-6 py-3 bg-[#f76c6c] text-white rounded-full hover:bg-[#e55c5c] transition-colors duration-200 shadow-md hover:shadow-lg"
            onClick={handleAddTask}
          >
            <Plus size={20} className="mr-2" />
            Add New Task
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-t-4 border-[#f76c6c]"></div>
      <div className="flex flex-1">
        {/* Left Pane (30%) */}
        <div className="w-1/3 bg-[#ffe5e5] p-6 border-r-4 border-[#f76c6c] flex flex-col gap-6">
          <button 
            className={`w-full text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 ${
              activePage === "General Task" 
                ? "bg-[#f76c6c] text-white shadow-lg" 
                : "bg-white text-[#f76c6c] hover:bg-[#f76c6c] hover:text-white"
            }`}
            onClick={() => setActivePage("General Task")}
          >
            General Task
          </button>
          <div className="grid grid-cols-2 gap-4">
            {["Daily Task", "Weekly Task", "Monthly Task", "Yearly Task"].map((page) => (
              <button
                key={page}
                className={`text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                  activePage === page 
                    ? "bg-[#f76c6c] text-white shadow-lg" 
                    : "bg-white text-[#f76c6c] hover:bg-[#f76c6c] hover:text-white"
                }`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* Right Pane (70%) */}
        <div className="w-2/3 bg-gray-50 p-8 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
      <div className="border-t-4 border-[#f76c6c]"></div>
    </div>
  );
};

export default Home;