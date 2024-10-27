import React, { useState, useEffect } from 'react';

// Helper function to manage tasks in local storage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('generalTasks', JSON.stringify(tasks));
};

const getTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('generalTasks')) || [];
};

const GeneralTasks = () => {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage());
  const [showAddTask, setShowAddTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  // Load tasks from local storage on component mount
  useEffect(() => {
    setTasks(getTasksFromLocalStorage());
  }, []);

  // Handle saving a new task
  const handleSaveTask = () => {
    if (taskTitle && taskDescription) {
      const newTask = { id: Date.now(), title: taskTitle, description: taskDescription };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks); // Save updated tasks to local storage
      setTaskTitle('');
      setTaskDescription('');
      setShowAddTask(false);
    }
  };

  return (
    <div className="task-container" style={{ padding: '20px', background: '#f0f4f8', borderRadius: '8px' }}>
      {/* Add Task Button */}
      {!showAddTask && (
        <button
          onClick={() => setShowAddTask(true)}
          style={{ padding: '10px 20px', backgroundColor: '#f76c6c', color: '#fff', borderRadius: '5px' }}
        >
          Add Task
        </button>
      )}

      {/* Task Entry Form */}
      {showAddTask && (
        <div className="task-entry" style={{ marginTop: '20px', padding: '15px', background: '#fff', borderRadius: '8px' }}>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task Title"
            style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
          />
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Task Description"
            rows="3"
            style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
          />
          <button
            onClick={handleSaveTask}
            style={{ padding: '10px 20px', backgroundColor: '#4caf50', color: '#fff', borderRadius: '5px' }}
          >
            Save Task
          </button>
        </div>
      )}

      {/* Task List */}
      <div className="task-list" style={{ marginTop: '20px' }}>
        <h3>General Tasks</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} style={{ margin: '10px 0', padding: '10px', background: '#e8eaf6', borderRadius: '5px' }}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GeneralTasks;
