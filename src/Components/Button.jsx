/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
function Button({ children, type }) {
  return (
    <div>
      <button className={styles[type]}>{children}</button>
    </div>
  );
}

export default Button;
