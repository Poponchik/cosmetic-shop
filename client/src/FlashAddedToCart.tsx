import * as React from "react";
import styles from "./styles/flashAddedToCart.module.css";
import { Link } from "react-router-dom";
import { config } from "./config";
import { FiCheck } from "react-icons/fi";

function FlashAddedToCart(product) {
  return (
    <div className={styles.content}>
      <div className={styles.message_block}>
        <FiCheck className={styles.check_icon} size={20} />
        <p className={styles.message}>Product added to cart!</p>
      </div>
      <div className={styles.product_block}>
        <img
          src={`${config.serverUrl}/${product.product.images[0]}`}
          className={styles.image_product}
        ></img>
        <div>
        <p className={styles.message}>{product.product.name}</p>
        <p className={styles.description_product}>{product.product.description}</p>
        </div>
      </div>

      <Link to="/cart" className={styles.link}>
        <button className={styles.button_checkout}>Checkout</button>
      </Link>
    </div>
  );
}

export default FlashAddedToCart;
