import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
const apiUrl = 'http://localhost:7000';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try
       {
        const response = await axios.get(`${apiUrl}/tasks`);
        setTasks(response.data);
      } 
      catch (error) {
        alert('Error fetching tasks');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4 "
    
     >
      <h2 id='taskList'>Tasks List</h2>
      <table className="table list">
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Task Category</th>
            <th>Task Description</th>
           
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.taskId}>
            <td>{task.taskId}</td>
              <td>{task.taskName}</td>
              <td>{task.taskCategory}</td>
              <td>{task.taskDescription}</td>
        
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
