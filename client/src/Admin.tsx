import * as React from "react";
import styles from "./styles/admin.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

function Admin() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.admin_page}>
          <h1 className={styles.page_title}>Products</h1>
          <Link to="/newProduct" className={styles.link}>
            <button className={styles.add_product_btn}>
              ＋ Add new product
            </button>
          </Link>

          <div className={styles.products_block}>
            <div className={styles.products}>
              <Link to="/product" className={styles.link}>
                <div className={styles.product_cart}>
                  <img
                    src="./images/product1.png"
                    className={styles.product_photo}
                  ></img>
                  <p className={styles.title_product}>Body Scrub</p>
                  <div className={styles.description_product}>
                    <p>Anti-cellulite coffee scrub with red pepper,</p>
                    <p>300g</p>
                  </div>
                  <div className={styles.price_block}>
                    <p className={styles.price_product}> 150 ₴</p>
                    <div className={styles.icons}>
                      <AiFillEdit size={26} />
                      <AiFillDelete size={26} />
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/product" className={styles.link}>
                <div className={styles.product_cart}>
                  <img
                    src="./images/product2.png"
                    className={styles.product_photo}
                  ></img>
                  <p className={styles.title_product}>Body Scrub</p>
                  <div className={styles.description_product}>
                    <p>Anti-cellulite coffee scrub with red pepper,</p>
                    <p>300g</p>
                  </div>
                  <div className={styles.price_block}>
                    <p className={styles.price_product}> 150 ₴</p>
                    <div className={styles.icons}>
                      <AiFillEdit size={26} />
                      <AiFillDelete size={26} />
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/product" className={styles.link}>
                <div className={styles.product_cart}>
                  <img
                    src="./images/product3.png"
                    className={styles.product_photo}
                  ></img>
                  <p className={styles.title_product}>Body Scrub</p>
                  <div className={styles.description_product}>
                    <p>Anti-cellulite coffee scrub with red pepper,</p>
                    <p>300g</p>
                  </div>
                  <div className={styles.price_block}>
                    <p className={styles.price_product}> 150 ₴</p>
                    <div className={styles.icons}>
                      <AiFillEdit size={26} />
                      <AiFillDelete size={26} />
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/product" className={styles.link}>
                <div className={styles.product_cart}>
                  <img
                    src="./images/product4.png"
                    className={styles.product_photo}
                  ></img>
                  <p className={styles.title_product}>Body Scrub</p>
                  <div className={styles.description_product}>
                    <p>Anti-cellulite coffee scrub with red pepper,</p>
                    <p>300g</p>
                  </div>
                  <div className={styles.price_block}>
                    <p className={styles.price_product}> 150 ₴</p>
                    <div className={styles.icons}>
                      <AiFillEdit size={26} />
                      <AiFillDelete size={26} />
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/product" className={styles.link}>
                <div className={styles.product_cart}>
                  <img
                    src="./images/product4.png"
                    className={styles.product_photo}
                  ></img>
                  <p className={styles.title_product}>Body Scrub</p>
                  <div className={styles.description_product}>
                    <p>Anti-cellulite coffee scrub with red pepper,</p>
                    <p>300g</p>
                  </div>
                  <div className={styles.price_block}>
                    <p className={styles.price_product}> 150 ₴</p>
                    <div className={styles.icons}>
                      <AiFillEdit size={26} />
                      <AiFillDelete size={26} />
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/product" className={styles.link}>
                <div className={styles.product_cart}>
                  <img
                    src="./images/product4.png"
                    className={styles.product_photo}
                  ></img>
                  <p className={styles.title_product}>Body Scrub</p>
                  <div className={styles.description_product}>
                    <p>Anti-cellulite coffee scrub with red pepper,</p>
                    <p>300g</p>
                  </div>
                  <div className={styles.price_block}>
                    <p className={styles.price_product}> 150 ₴</p>
                    <div className={styles.icons}>
                      <AiFillEdit size={26} />
                      <AiFillDelete size={26} />
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/product" className={styles.link}>
                <div className={styles.product_cart}>
                  <img
                    src="./images/product4.png"
                    className={styles.product_photo}
                  ></img>
                  <p className={styles.title_product}>Body Scrub</p>
                  <div className={styles.description_product}>
                    <p>Anti-cellulite coffee scrub with red pepper,</p>
                    <p>300g</p>
                  </div>
                  <div className={styles.price_block}>
                    <p className={styles.price_product}> 150 ₴</p>
                    <div className={styles.icons}>
                      <AiFillEdit size={26} />
                      <AiFillDelete size={26} />
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/product" className={styles.link}>
                <div className={styles.product_cart}>
                  <img
                    src="./images/product4.png"
                    className={styles.product_photo}
                  ></img>
                  <p className={styles.title_product}>Body Scrub</p>
                  <div className={styles.description_product}>
                    <p>Anti-cellulite coffee scrub with red pepper,</p>
                    <p>300g</p>
                  </div>
                  <div className={styles.price_block}>
                    <p className={styles.price_product}> 150 ₴</p>
                    <div className={styles.icons}>
                      <AiFillEdit size={26} />
                      <AiFillDelete size={26} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
