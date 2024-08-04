// import AppNav from "../Components/AppNav";
import styles from "./AppLayout.module.css";
import SideBar from "../Components/SideBar";
function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <div>
        <SideBar />
      </div>
      <div className={styles.mapSide}>
        <h1>Map section</h1>
      </div>
    </div>
  );
}

export default AppLayout;
