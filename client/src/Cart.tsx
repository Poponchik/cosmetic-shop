import * as React from "react";
import styles from "./styles/cart.module.css";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.cart_page}>
          <div className={styles.order_price_block}>
            <h2 className={styles.title}>Checkout</h2>
            <hr className={styles.line} />

            <div>
              <p className={styles.title_data}>Personal data</p>

              <div className={styles.checkout_block}>
                <input
                  className={styles.input}
                  placeholder="First name"
                ></input>
                <input className={styles.input} placeholder="Last name"></input>
                <input className={styles.input} placeholder="Email"></input>
                <input
                  className={styles.input}
                  placeholder="Phone number"
                ></input>
                <input
                  className={styles.input_address}
                  placeholder="Address"
                ></input>
              </div>
            </div>

           
            <div className={styles.total_block}>
              <p className={styles.total_title}>Total:</p>
              <p className={styles.total}>1 420₴</p>
            </div>
            <hr className={styles.line} />
            <div className={styles.buttons}>
              <button className={styles.button_confirm}>Confirm</button>
              <a className={styles.button_shopping}>Continue shopping</a>
            </div>
          </div>

          <div className={styles.product_list_block}>
            <h2 className={styles.title_order}>Your order</h2>
            <hr className={styles.line} />

            <div className={styles.product_cart}>
              <div className={styles.right_block}>
                <img
                  className={styles.img_product}
                  src="./images/product1.png"
                ></img>

                <div>
                  <p className={styles.title_product}>Eye gel</p>
                  <p className={styles.size_product}>30ml</p>
                  <div className={styles.count_block}>
                    <FiMinus size={16} className={styles.icon} />
                    <p className={styles.count}>1</p>
                    <FiPlus size={16} className={styles.icon} />
                  </div>
                </div>
              </div>
              <div className={styles.left_block}>
                <CgClose size={20} className={styles.icon_close} />
                <div className={styles.price_product}>500₴</div>
              </div>
            </div>

            <div className={styles.product_cart}>
              <div className={styles.right_block}>
                <img
                  className={styles.img_product}
                  src="./images/product2.png"
                ></img>

                <div>
                  <p className={styles.title_product}>Eye gel</p>
                  <p className={styles.size_product}>30ml</p>
                  <div className={styles.count_block}>
                    <FiMinus size={16} className={styles.icon} />
                    <p className={styles.count}> 1</p>
                    <FiPlus size={16} className={styles.icon} />
                  </div>
                </div>
              </div>
              <div className={styles.left_block}>
                <CgClose size={20} className={styles.icon_close} />
                <div className={styles.price_product}>500₴</div>
              </div>
            </div>

            <div className={styles.product_cart}>
              <div className={styles.right_block}>
                <img
                  className={styles.img_product}
                  src="./images/product3.png"
                ></img>

                <div>
                  <p className={styles.title_product}>Eye gel</p>
                  <p className={styles.size_product}>30ml</p>
                  <div className={styles.count_block}>
                    <FiMinus size={16} className={styles.icon} />
                    <p className={styles.count}>1</p>
                    <FiPlus size={16} className={styles.icon} />
                  </div>
                </div>
              </div>
              <div className={styles.left_block}>
                <CgClose size={20} className={styles.icon_close} />
                <div className={styles.price_product}>500₴</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
