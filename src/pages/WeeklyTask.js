// src/pages/WeeklyTask.js
import React from 'react';
import TaskManager from '../components/TaskManager';

const WeeklyTask = () => {
    return (
        <div className="task-page">
            <TaskManager activePage="WeeklyTask" />
        </div>
    );
};

export default WeeklyTask;
