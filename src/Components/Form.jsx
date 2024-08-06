import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./Form.module.css";
function Form() {
  const navigate = useNavigate();
  return (
    <div>
      <form className={styles.form}>
        <label>City name</label>
        <input type="text"></input>
        <label>When did you go?</label>
        <input type="text"></input>
        <label>Notes about your trip</label>
        <input type="textField"></input>
        <div className={styles.btns}>
          <Button type="add">Add</Button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            &larr;Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
