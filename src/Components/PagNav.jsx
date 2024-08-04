import { NavLink } from "react-router-dom";
import styles from "./PagNav.module.css";
import Logo from "./Logo";

function PagNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </span>
        </div>
        <div className={styles.menuItems}>
          <span>
            <NavLink to="/pricing" className={styles.active}>
              Pricing
            </NavLink>
          </span>
          <span>
            <NavLink to="/product">Product</NavLink>
          </span>
          {/* <span>
            <NavLink to="/*">ProductNotFound</NavLink>
          </span> */}
          <span>
            <NavLink to="/login">Login</NavLink>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default PagNav;
