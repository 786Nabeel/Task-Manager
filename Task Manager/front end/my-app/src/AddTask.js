import React, { useState } from "react";
import axios from "axios";
import "./App.css";
const apiUrl = "http://localhost:7000";

const AddTask = () => {
  const [task, setTask] = useState({
    taskId: "",
    taskName: "",
    taskCategory: "",
    taskDescription: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${apiUrl}/tasks`, task);
      alert("Task added successfully!");
    } catch (error) {
      alert("Error occured!Adding task cannot be done");
    }
  };

  return (
    <>
      <div className="header text-dark bg-info">
        <h2>Create a Task</h2>
        <form onSubmit={handleSubmit}>
          {/* Add form inputs for each booking property */}
          <div className="mb-3">
            <label htmlFor="taskId" className="form-label">
              Task ID
            </label>
            <input
              type="text"
              className="form-control"
              id="taskId"
              name="taskId"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="taskName" className="form-label">
              Task Name
            </label>
            <input
              type="text"
              className="form-control"
              id="taskName"
              name="taskName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="taskCategory" className="form-label">
              Task Category
            </label>
            <input
              type="text"
              className="form-control"
              id="taskCategory"
              name="taskCategory"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cost" className="form-label">
              Task Description
            </label>
            <input
              type="text"
              className="form-control"
              id="taskDescription"
              name="taskDescription"
              onChange={handleChange}
              required
            />
          </div>
          {/* Add other form inputs for employee properties */}
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
      </div>
      <br /> <br /> <br /> <br />
    </>
  );
};

export default AddTask;
