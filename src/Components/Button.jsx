/* eslint-disable react/prop-types */
import styles from "./Button.module.css";
function Button({ children, type, onClick }) {
  return (
    <div>
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
