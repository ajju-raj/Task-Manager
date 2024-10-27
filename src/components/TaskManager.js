// src/components/TaskManager.js
import React, { useState, useEffect } from 'react';

// Helper functions to manage tasks in local storage
const saveTasksToLocalStorage = (activePage, tasks) => {
    localStorage.setItem(activePage, JSON.stringify(tasks));
};

const getTasksFromLocalStorage = (activePage) => {
    return JSON.parse(localStorage.getItem(activePage)) || [];
};

const TaskManager = ({ activePage }) => {
    const [tasks, setTasks] = useState(getTasksFromLocalStorage(activePage));
    const [showAddTask, setShowAddTask] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [editingTaskIndex, setEditingTaskIndex] = useState(null);

    // Load tasks from local storage when the active page changes
    useEffect(() => {
        setTasks(getTasksFromLocalStorage(activePage));
    }, [activePage]);

    // Handle saving a new task
    const handleSaveTask = () => {
        if (taskTitle && taskDescription) {
            const newTask = {
                id: Date.now(),
                title: taskTitle,
                description: taskDescription,
            };

            const updatedTasks = editingTaskIndex !== null
                ? tasks.map((task, index) => (index === editingTaskIndex ? newTask : task))
                : [...tasks, newTask];

            setTasks(updatedTasks);
            saveTasksToLocalStorage(activePage, updatedTasks); // Save updated tasks to local storage
            setTaskTitle('');
            setTaskDescription('');
            setEditingTaskIndex(null);
            setShowAddTask(false);
        }
    };

    const handleEditTask = (index) => {
        const taskToEdit = tasks[index];
        setTaskTitle(taskToEdit.title);
        setTaskDescription(taskToEdit.description);
        setEditingTaskIndex(index);
        setShowAddTask(true);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        saveTasksToLocalStorage(activePage, updatedTasks);
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
                        {editingTaskIndex !== null ? "Update Task" : "Save Task"}
                    </button>
                </div>
            )}

            {/* Task List */}
            <div className="task-list" style={{ marginTop: '20px' }}>
                <h3>{activePage.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={task.id} style={{ margin: '10px 0', padding: '10px', background: '#e8eaf6', borderRadius: '5px' }}>
                            <h4>{task.title}</h4>
                            <p>{task.description}</p>
                            <button onClick={() => handleEditTask(index)} style={{ marginRight: '10px' }}>Edit</button>
                            <button onClick={() => handleDeleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskManager;
