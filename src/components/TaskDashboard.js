import React, { useState } from 'react';
import GeneralTasks from './GeneralTasks';

const TaskDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar with Buttons */}
      <div style={{ width: '30%', padding: '20px', backgroundColor: '#f8f9fa' }}>
        <button
          onClick={() => setActiveSection('general')}
          style={{ display: 'block', width: '80%', margin: '10px auto', padding: '10px', backgroundColor: '#f76c6c', color: '#fff', borderRadius: '5px' }}
        >
          General
        </button>
        <button style={{ display: 'inline-block', width: '40%', margin: '10px 5%', padding: '10px', backgroundColor: '#f76c6c', color: '#fff', borderRadius: '5px' }}>Daily</button>
        <button style={{ display: 'inline-block', width: '40%', margin: '10px 5%', padding: '10px', backgroundColor: '#f76c6c', color: '#fff', borderRadius: '5px' }}>Weekly</button>
        <button style={{ display: 'inline-block', width: '40%', margin: '10px 5%', padding: '10px', backgroundColor: '#f76c6c', color: '#fff', borderRadius: '5px' }}>Monthly</button>
        <button style={{ display: 'inline-block', width: '40%', margin: '10px 5%', padding: '10px', backgroundColor: '#f76c6c', color: '#fff', borderRadius: '5px' }}>Yearly</button>
      </div>

      {/* Content Area */}
      <div style={{ width: '70%', padding: '20px' }}>
        {activeSection === 'general' && <GeneralTasks />}
      </div>
    </div>
  );
};

export default TaskDashboard;
