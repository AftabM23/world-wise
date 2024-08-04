import PagNav from "../Components/PagNav";
import ProductComponent from "../Components/ProductComponent";
import styles from "./Product.module.css";

function Product() {
  return (
    <div className={styles.productStyle}>
      <PagNav />

      <ProductComponent />
    </div>
  );
}

export default Product;
