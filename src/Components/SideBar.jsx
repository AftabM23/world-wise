import Logo from "./Logo";
import styles from "./SideBar.module.css";
import { Link, Outlet } from "react-router-dom";
import AppNav from "./AppNav";
function SideBar() {
  return (
    <div className={styles.sideBar}>
      <Link to="/" className={styles.logoAnchor}>
        <Logo />
      </Link>
      <AppNav />
      <Outlet />
    </div>
  );
}

export default SideBar;
