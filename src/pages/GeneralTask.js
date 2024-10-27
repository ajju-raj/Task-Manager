// src/pages/GeneralTask.js
import React from 'react';
import TaskManager from '../components/TaskManager';

const GeneralTask = () => {
    return (
        <div className="task-page">
            <TaskManager activePage="GeneralTask" />
        </div>
    );
};

export default GeneralTask;
