import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  const { tasks } = useContext(TaskContext);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className={styles.dashboard}>
      <h2>TaskMaster Dashboard</h2>
      <div className={styles.stats}>
        <div className={styles.statCard}>Total Tasks: {totalTasks}</div>
        <div className={styles.statCard}>Completed: {completedTasks}</div>
        <div className={styles.statCard}>Pending: {pendingTasks}</div>
      </div>
    </div>
  );
};

export default Dashboard;
