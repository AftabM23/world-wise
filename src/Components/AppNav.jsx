import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";
function AppNav() {
  return (
    <div className={styles.navLinks}>
      <nav>
        <NavLink
          to="cities"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Cities
        </NavLink>
        <NavLink
          to="countries"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Countries
        </NavLink>
      </nav>
    </div>
  );
}

export default AppNav;
