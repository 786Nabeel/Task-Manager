import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:7000';

const DeleteTask = ({ history }) => {
  const [Id, setId] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

       
    try {
      // Send a DELETE request to the API endpoint for deleting a Task
      await axios.delete(`${apiUrl}/tasks?taskId=${Id}`);

      // If the delete request is successful, show an alert and redirect to the Taks list
      alert('Task deleted successfully!');
      history.push('/task');
    } catch (error) {
      // If an error occurs during the delete operation, log the error to the console
      alert('Task deletion error');
    }
  };

  return (
    <div className="header bg-info">
      <h2>Delete Task</h2>
      <form onSubmit={handleDelete}>
        <div className="mb-3">
          <label htmlFor="bookingId" className="form-label">Task ID</label>
          <input
            type="text"
            className="form-control"
            id="taskId"
            name="taskId"
            value={Id}
            onChange={handleIdChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">Delete Task</button>
      </form>
    </div>
  );
};

export default DeleteTask;
