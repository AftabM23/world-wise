import PagNav from "../Components/PagNav";
import styles from "./ProductNotFound.module.css";
function ProductNotFound() {
  return (
    <div className={styles.productNotFound}>
      <PagNav />
      <h1>Product not found</h1>
    </div>
  );
}

export default ProductNotFound;
