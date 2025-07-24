import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import {
  FaTachometerAlt,
  FaTasks,
  FaCog,
  FaUser,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}
      style={{
        position: "fixed",
        height: "100vh",
        transition: "width 0.3s ease",
      }}
    >
      <div className={styles.topSection}>
        <button
          className={styles.toggleButton}
          onClick={() => setCollapsed(!collapsed)}
          title="Toggle sidebar"
        >
          <FaBars />
        </button>
        {!collapsed && <h1 className={styles.logo}>TaskMaster</h1>}
      </div>

      <nav className={styles.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FaTachometerAlt /> <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/tasks"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FaTasks /> <span> +Tasks</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FaCog /> <span>Settings</span>
        </NavLink>
      </nav>

      <div className={styles.bottomSection}>
        <FaUser /> <span>User Profile</span>
      </div>
    </aside>
  );
};

export default Sidebar;
