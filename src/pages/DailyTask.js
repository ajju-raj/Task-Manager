// src/pages/DailyTask.js
import React from 'react';
import TaskManager from '../components/TaskManager';

const DailyTask = () => {
    return (
        <div className="task-page">
            <TaskManager activePage="DailyTask" />
        </div>
    );
};

export default DailyTask;
