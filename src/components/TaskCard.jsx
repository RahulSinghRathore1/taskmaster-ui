import { motion } from "framer-motion";
import { FiCheck, FiTrash2 } from "react-icons/fi";
import styles from "../styles/TaskCard.module.css";

const TaskCard = ({ task, onDelete, onToggle }) => {
  const priorityColor = {
    High: "#ef4444", // red
    Medium: "#facc15", // yellow
    Low: "#10b981", // green
  }[task.priority];

  return (
    <motion.div
      className={`${styles.card} ${
        task.status === "Completed" ? styles.completed : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{task.title}</h3>
        <span className={styles.status}>{task.status}</span>
      </div>

      <div className={styles.meta}>
        <div
          className={styles.priority}
          style={{ "--priority-color": priorityColor }}
        >
          {task.priority} Priority
        </div>
        {task.dueDate && (
          <div className={styles.due}>
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button
          onClick={() => onToggle(task.id)}
          className={styles.iconButton}
          aria-label="Mark complete"
        >
          <FiCheck />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className={styles.iconButton}
          aria-label="Delete"
        >
          <FiTrash2 />
        </button>
      </div>
    </motion.div>
  );
};

export default TaskCard;
