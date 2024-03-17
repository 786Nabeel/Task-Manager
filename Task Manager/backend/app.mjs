import express from "express";
import process from "process";
const app = express();
import { Tasks } from "./db/tasks.mjs";
import { appConfig } from "./config/config.mjs";
appConfig(app);

// Create a new Booking
app.post("/tasks", async (req, res) => {

  try {
    const newTask = await Tasks.create({
      taskId: req.body.taskId,
      taskName: req.body.taskName,
      taskCategory: req.body.taskCategory,
      taskDescription: req.body.taskDescription,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error occured' });
  }
});

// Read all employees
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Read a specific employee by ID
app.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Tasks.findOne({ taskId: req.params.id });

    console.log(`The id received is ${req.params.id}`);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Update an employee by ID
app.put("/tasks", async (req, res) => {
  console.log(req.body);
  try {
    const updatedTask = await Tasks.findOneAndUpdate(
      { taskId: req.body.taskId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});


// DELETE endpoint to delete a booking by a bookingId
app.delete("/tasks", async (req, res) => {
  try {
    const deleteTask = await Tasks.findOneAndDelete({
      taskId: req.query.taskId,
    });

    if (!deleteTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

const port = process.env.PORT || 7000; // the server port

// Server listening
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
