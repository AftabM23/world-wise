import PagNav from "../Components/PagNav";
import PricingComponent from "../Components/PricingComponent";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <div className={styles.pricingPage}>
      <PagNav />
      <PricingComponent />
    </div>
  );
}

export default Pricing;
