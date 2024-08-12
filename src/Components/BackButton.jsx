import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div className={styles.btn}>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr;Back
      </button>
    </div>
  );
}

export default BackButton;
