import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PagNav from "../Components/PagNav";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <PagNav />

      <section className="mainContent">
        <h1>
          You travel the world. <br />
          WorldWise keeps track of your adventures
        </h1>
        <div className={styles.homepagePara}>
          <p>
            A world map track your footsteps into Every city you can think of.
            Never forget your wonderful experiences, and show your friends now
            you have wondered the world
          </p>
        </div>
        <Link to="/login" className={styles.cta}>
          <span className={styles.trackingButton}> Start Tracking Now</span>
        </Link>
        {/* <AppNav /> */}
      </section>
    </div>
  );
}

export default Homepage;
