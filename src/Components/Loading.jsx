import styles from "./Loading.module.css";
function Loading() {
  return (
    <div className={styles.loader}>
      <div className={styles.face}>
        <div className={styles.circ}></div>
      </div>
      <div className={styles.face}>
        <div className={styles.circ}></div>
      </div>
    </div>
  );
}

export default Loading;
