import TaskCard from "./TaskCard";
import styles from "../styles/TaskList.module.css";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className={styles.taskList}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      ) : (
        <div className={styles.emptyState}>
          <p>No tasks yet. Add one to get started!</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
