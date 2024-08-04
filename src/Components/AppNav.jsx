import styles from "./AppNav.module.css";
import { Link } from "react-router-dom";
function AppNav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navLinks}>
        <Link to="cities">Cities</Link>
        <Link to="countries">Countries</Link>
      </div>
    </div>
  );
}

export default AppNav;
