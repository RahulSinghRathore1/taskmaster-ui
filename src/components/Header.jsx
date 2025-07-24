import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "../styles/Header.module.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h2 style={{ color: "grey" }}>Gentle Reminder!!</h2>
      </div>
      <div className={styles.right}>
        <button
          className={styles.themeToggle}
          onClick={toggleDarkMode}
          title="Toggle Theme"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <div className={styles.profile}>
          Welcome!!, User <span className={styles.avatar}>T</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
