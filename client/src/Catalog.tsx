import * as React from "react";
import styles from "./styles/catalog.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import classNames from "classnames";
import { Link } from "react-router-dom";

function Catalog() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.main_screen}>
            <body className={styles.catalog_page}>
              <div className={styles.bc}>
                <p className={styles.catalog_bc}>Catalog</p>
                <IoIosArrowForward size={10} className={styles.icon_arrow_bc} />
                <p className={styles.category_bc}>Face</p>
              </div>

              <div className={styles.category_catalog}>Facial skin care</div>

              <div className={styles.dropdown_sort}>
                <span className={styles.sort}>Sort by:</span>
                <div className={styles.dropdown_content}>
                  <a href="#">Default</a>
                  <a href="#">Ascending price</a>
                  <a href="#">Descending price</a>
                </div>
              </div>

              <div className={styles.catalog_block}>
                <div className={styles.filters_block}>
                  <div className={styles.prices_block}>
                    <p className={styles.price}>Price</p>
                    <div className={styles.filter_price}>
                      <input
                        className={styles.input_price}
                        placeholder="52"
                      ></input>
                      <p>-</p>
                      <input
                        className={styles.input_price}
                        placeholder="750"
                      ></input>
                      <button
                        className={classNames(
                          styles.price_button,
                          styles.button
                        )}
                      >
                        Ok
                      </button>
                    </div>
                  </div>

                  <div className={styles.preparation_filter}>
                    <p className={styles.preparation}>Preparation type</p>
                    <div className={styles.type}>
                      <div className={styles.checkbox}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                        ></input>
                      </div>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                  </div>

                  <div className={styles.preparation_filter}>
                    <p className={styles.preparation}>Skin type</p>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                  </div>

                  <div className={styles.preparation_filter}>
                    <p className={styles.preparation}>Desired effect</p>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                    <div className={styles.type}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                      ></input>
                      <p className={styles.type_product}>Washing gel</p>
                      <p className={styles.count_products}>(10)</p>
                    </div>
                  </div>
                  <p className={styles.reset_filters}>Reset filters</p>
                </div>

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
                          <button
                            className={classNames(
                              styles.small_button,
                              styles.button
                            )}
                          >
                            Add to cart
                          </button>
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
                          <button
                            className={classNames(
                              styles.small_button,
                              styles.button
                            )}
                          >
                            Add to cart
                          </button>
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
                          <button
                            className={classNames(
                              styles.small_button,
                              styles.button
                            )}
                          >
                            Add to cart
                          </button>
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
                          <button
                            className={classNames(
                              styles.small_button,
                              styles.button
                            )}
                          >
                            Add to cart
                          </button>
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
                          <button
                            className={classNames(
                              styles.small_button,
                              styles.button
                            )}
                          >
                            Add to cart
                          </button>
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
                          <button
                            className={classNames(
                              styles.small_button,
                              styles.button
                            )}
                          >
                            Add to cart
                          </button>
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
                          <button
                            className={classNames(
                              styles.small_button,
                              styles.button
                            )}
                          >
                            Add to cart
                          </button>
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
                          <button
                            className={classNames(
                              styles.small_button,
                              styles.button
                            )}
                          >
                            Add to cart
                          </button>
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
                          <button
                            className={classNames(
                              styles.small_button,
                              styles.button
                            )}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <button className={styles.show_button}>Show more</button>
                </div>
              </div>
              <div className={styles.products_viewed_block}>
                <div className={styles.products_viewed_title}>
                  Products viewed
                </div>
                <div className={styles.products_viewed}>
                  <IoIosArrowBack className={styles.arrow_left} size={24} />

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
                      <button
                        className={classNames(
                          styles.small_button,
                          styles.button
                        )}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>

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
                      <button
                        className={classNames(
                          styles.small_button,
                          styles.button
                        )}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>

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
                      <button
                        className={classNames(
                          styles.small_button,
                          styles.button
                        )}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>

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
                      <button
                        className={classNames(
                          styles.small_button,
                          styles.button
                        )}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <IoIosArrowForward className={styles.arrow_right} size={24} />
                </div>
              </div>
            </body>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Catalog;
