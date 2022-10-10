import * as React from "react";
import styles from "./styles/admin.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Product } from "./types";
import dataService from "./ds";
import { config } from "./config";
import { useState, useEffect } from "react";

function Admin() {
  const [products, setProducts] = useState<Array<Product>>([]);

  async function getProducts() {
    const { data } = await dataService.product.getAllProducts();
    setProducts(data);

    console.log(data);
  }

  async function deletePost(productId: string) {
    await dataService.product.deleteProduct(productId);

    getProducts()
  }

  useEffect(() => {
    getProducts();
  }, []);
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
              {products.map((product) => {
                return (
                  <Link to="/product" className={styles.link}>
                    <div className={styles.product_cart}>
                      <img
                        src={`${config.serverUrl}/${product.images[0]}`}
                        className={styles.product_photo}
                      ></img>
                      <p className={styles.title_product}>{product.name}</p>
                      <div className={styles.description_product}>
                        <p>{product.description}</p>
                      </div>
                      <div className={styles.price_block}>
                        <p className={styles.price_product}>{product.price}</p>
                        <div className={styles.icons}>
                          <Link to="/editProduct" className={styles.link}>
                            <AiFillEdit size={26} />
                          </Link>
                          <Link  to="/admin" className={styles.link}>
                            <AiFillDelete
                              size={26}
                              onClick={() => deletePost(product._id)}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
