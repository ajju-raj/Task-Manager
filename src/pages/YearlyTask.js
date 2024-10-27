// src/pages/YearlyTask.js
import React from 'react';
import TaskManager from '../components/TaskManager';

const YearlyTask = () => {
    return (
        <div className="task-page">
            <TaskManager activePage="YearlyTask" />
        </div>
    );
};

export default YearlyTask;
