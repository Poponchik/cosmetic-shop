import * as React from "react";
import styles from "./styles/cart.module.css";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";
import { config } from "./config";
import { Product, Category } from "./types";
import dataService from "./ds";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  async function createOrder() {
    if( !phoneNumber || !address || !email) return
    const mappedCart = cart.map((element) => {
      return {
        quantity: element.quantity,
        productId: element.item._id
      }
    })
    await dataService.order.createOrder(
      mappedCart,
      phoneNumber,
      address,
      email,
    
    );

    setLastName('')
    setName('')
    setPhoneNumber('')
    setAddress('')
    setEmail('')
  }

  async function changeQuantity(cartElementId, operator) {
    const itemInCartIndex = cart.findIndex(
      (element) => cartElementId === element.item._id
    );

    if (operator === "minus") {
      if (cart[itemInCartIndex].quantity <= 1) return;
      cart[itemInCartIndex].quantity--;
    }

    if (operator === "plus") {
      cart[itemInCartIndex].quantity++;
    }

    setCart([...cart]);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  async function removeFromCart(cartElementId) {
    const itemInCartIndex = cart.findIndex(
      (element) => cartElementId === element.item._id
    );
    cart.splice(itemInCartIndex, 1);

    setCart([...cart]);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

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
                  placeholder="First name" value={name}
                  onChange={(event) => setName(event.target.value)}
                ></input>
                <input
                  className={styles.input}
                  placeholder="Last name" value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                ></input>
                <input
                  className={styles.input}
                  placeholder="Email" value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
                <input
                  className={styles.input}
                  placeholder="Phone number"  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                ></input>
                <input
                  className={styles.input_address}
                  placeholder="Address"  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                ></input>
              </div>
            </div>

            <div className={styles.total_block}>
              <p className={styles.total_title}>Total:</p>
              <p className={styles.total}>1 420₴</p>
            </div>
            <hr className={styles.line} />
            <div className={styles.buttons}>
              <button className={styles.button_confirm}
              onClick={() => createOrder()}
              >Confirm</button>
              <a className={styles.button_shopping}>Continue shopping</a>
            </div>
          </div>

          <div className={styles.product_list_block}>
            <h2 className={styles.title_order}>Your order</h2>
            <hr className={styles.line} />

            {cart.map((cartElement) => {
              return (
                <div className={styles.product_cart} key={cartElement._id}>
                  <div className={styles.right_block}>
                    <img
                      className={styles.img_product}
                      src={`${config.serverUrl}/${cartElement.item.images[0]}`}
                    ></img>

                    <div>
                      <p className={styles.title_product}>
                        {cartElement.item.name}
                      </p>
                      <div className={styles.count_block}>
                        <FiMinus
                          size={16}
                          className={styles.icon}
                          onClick={() =>
                            changeQuantity(cartElement.item._id, "minus")
                          }
                        />
                        <p className={styles.count}>{cartElement.quantity}</p>
                        <FiPlus
                          size={16}
                          className={styles.icon}
                          onClick={() =>
                            changeQuantity(cartElement.item._id, "plus")
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.left_block}>
                    <CgClose
                      size={20}
                      className={styles.icon_close}
                      onClick={() => removeFromCart(cartElement.item._id)}
                    />

                    <div>
                      <div className={styles.cart_price_block}>
                        <div className={styles.price_product}>
                          {cartElement.item.price * cartElement.quantity}
                        </div>
                        <div>₴</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
