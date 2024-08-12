import BackButton from "./BackButton";
import Button from "./Button";
import styles from "./Form.module.css";
function Form() {
  return (
    <div className={styles.form}>
      <form>
        <label>City name</label>
        <input type="text"></input>
        <label>When did you go?</label>
        <input type="text"></input>
        <label>Notes about your trip</label>
        <input type="textField"></input>
        <div className={styles.btns}>
          <Button type="add">Add</Button>
          <BackButton />
        </div>
      </form>
    </div>
  );
}

export default Form;
