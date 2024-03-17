import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/Tasks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Model for Tasks
const taskSchema = new mongoose.Schema({
  taskId: {
    type: String,
    unique:true,
    index:true,
  },
  taskName: { type: String },
  taskCategory: { type: String },
  taskDescription: { type: String },
});
const Tasks = mongoose.model("Tasks", taskSchema);
export { Tasks };
