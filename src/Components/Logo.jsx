import styles from "./Logo.module.css";
import logo from "../Images/logo.png";
function Logo() {
  return (
    <div>
      <div className={styles.logo}>
        <span>
          <img src={logo} />
        </span>
      </div>
    </div>
  );
}

export default Logo;
