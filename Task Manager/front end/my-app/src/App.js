import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

import DeleteTask from "./DeleteTask";

import "./App.css";
import UpdateTask from "./updateTask";
const App = () => {
  return (
    <>
      <h2 id="h2" className=" text-center mt-5">
        Task Management System 😎
      </h2>
      <br />
      <Router>
        <div className="App-header  appHeader">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Task Management
              </Link>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link bg-secondary" to="/tasks">
                      Tasks List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link bg-info" to="/create">
                      Create a Task
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link bg-secondary" to="/delete">
                      Delete Task
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link bg-info" to="/update">
                      Update Task
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/tasks" exact element={<TaskList />} />
          <Route path="/create" element={<AddTask />} />
          <Route path="/update" element={<UpdateTask />} />
          <Route path="/delete" element={<DeleteTask />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
