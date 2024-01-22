import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  deadLine: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  status: { type: Number, default: 0 },
});

const Task = mongoose.models.tasks || mongoose.model("tasks", taskModel);

export default Task;
