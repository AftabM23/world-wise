import Loading from "../Components/Loading";
import styles from "./Loaderpage.module.css";

function Loaderpage() {
  return (
    <div className={styles.loadingPage}>
      <Loading />
    </div>
  );
}

export default Loaderpage;
