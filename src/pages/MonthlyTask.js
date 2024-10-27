// src/pages/MonthlyTask.js
import React from 'react';
import TaskManager from '../components/TaskManager';

const MonthlyTask = () => {
    return (
        <div className="task-page">
            <TaskManager activePage="MonthlyTask" />
        </div>
    );
};

export default MonthlyTask;
