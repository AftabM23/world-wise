import styles from "./ProductComponent.module.css";
import picture from "../Images/img-1.jpg";
function Product() {
  return (
    <div className={styles.productStyle}>
      <span className={styles.productStyleItem}>
        <img src={picture}></img>
      </span>
      <div>
        <span>
          <h1>About WorldWide.</h1>
        </span>
        <span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ullam et repellat necessitatibus dolores dignissimos possimus nobis
            maxime ipsum doloremque odit perspiciatis nulla, mollitia, excepturi
            asperiores atque? Nobis, optio enim.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            reiciendis commodi aliquid laudantium consequuntur atque
            perspiciatis. Eaque sit quisquam quibusdam deleniti doloremque
            doloribus aliquam autem, pariatur voluptatem dolor ab consequatur.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Product;
