import priceImage from "../Images/img-2.jpg";
import styles from "./PricingComponent.module.css";
function PricingComponent() {
  return (
    <div>
      <div className={styles.pricingComponent}>
        <div className={styles.pricingComponentItems}>
          <span>
            <h1>Simple pricing Just $9/month</h1>
          </span>
          <span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              veritatis porro, nesciunt est molestias magni, eveniet, dolore
              tempore id praesentium facere consectetur dignissimos deserunt
              tempora? Temporibus saepe similique officiis numquam.
            </p>
          </span>
        </div>
        <div className={styles.pricingComponentItems}>
          <img src={priceImage}></img>
        </div>
      </div>
    </div>
  );
}

export default PricingComponent;
