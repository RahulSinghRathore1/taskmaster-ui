import { useState } from "react";
import styles from "../styles/TaskForm.module.css";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      dueDate,
      status: "Pending",
    };

    onSubmit(newTask);
    setTitle("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <div className={styles.inputRow}>
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            required
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={styles.select}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className={styles.date}
          />
        </div>
        <button type="submit" className={styles.addTaskButton}>
          <span>➕</span> Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
