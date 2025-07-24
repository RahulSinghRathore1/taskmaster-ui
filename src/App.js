import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";
import { ThemeContext } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Dashboard from "./components/Dashboard";
import styles from "./styles/App.module.css";

const App = () => {
  const { tasks, addTask, deleteTask, toggleComplete } =
    useContext(TaskContext);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${styles.appContainer} ${isDarkMode ? styles.dark : ""}`}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/tasks"
              element={
                <div className={styles.taskPage}>
                  <h2 style={{ color: "violet" }} className={styles.pageTitle}>
                    Manage Your Tasks
                  </h2>
                  <TaskForm onSubmit={addTask} showAlways={true} />
                  <TaskList
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleComplete}
                  />
                </div>
              }
            />
            <Route
              path="/settings"
              element={
                <div className={styles.settingsPage}>
                  <h2 className={styles.pageTitle}>App Settings</h2>
                  <p>Customize your preferences, toggle dark mode, and more.</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
