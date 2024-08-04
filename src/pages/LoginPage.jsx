import PagNav from "../Components/PagNav";
import Login from "../Components/Login";
import styles from "./LoginPage.module.css";
function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <PagNav />
      <div>
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
