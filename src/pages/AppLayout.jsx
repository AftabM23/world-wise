// import AppNav from "../Components/AppNav";
import styles from "./AppLayout.module.css";
import SideBar from "../Components/SideBar";
import Map from "../Components/Map";
function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <div>
        <SideBar />
      </div>
      <div className={styles.mapSide}>
        <Map />
      </div>
    </div>
  );
}

export default AppLayout;
