import * as React from "react";
import styles from "./styles/main.module.css";
import { BsArrowRight } from "react-icons/bs";
import { ImLeaf } from "react-icons/im";
import { FaPaw } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { config } from "./config";
import dataService from "./ds";
import { Product } from "./types";
import { useState, useEffect } from "react";

function Main() {
  const [products, setProducts] = useState<Array<Product>>([]);

  async function getProducts() {
    const { data } = await dataService.product.getAllProducts();
    setProducts(data);

    console.log(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <React.Fragment>
      {/* <body> */}

      <div className={styles.inner_container}>
        <div className={styles.main_screen}>
          <div className={styles.left_div}>
            <h1 className={styles.main_text}>
              Natural cosmetics for gentle skin care
            </h1>
            <p className={styles.main_description}>
              Only natural and organic components, together with modern
              developments in cosmeceuticals.
            </p>
            <Link to="/catalog" className={styles.link_button}>
              <button className={classNames(styles.main_button, styles.button)}>
                Catalog
              </button>
            </Link>
          </div>

          <div className={styles.right_div}>
            <div className={styles.main_photo_div}>
              <img
                className={styles.main_photo}
                src="./images/main-photo.png"
              ></img>
              <div className={styles.product_on_main_photo}>
                <div className={styles.line} />

                <div className={styles.product_on_photo}>
                  <p className={styles.name_product_on_photo}>Feel Free GL</p>
                  <p className={styles.description_product_on_photo}>
                    Moisturizes the skin, makes it more elastic and tender.
                  </p>
                  <div className={styles.price_block}>
                    <p className={styles.price_product_on_photo}>₴160</p>
                    <BsArrowRight size={24} className={styles.arrow} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.opportunities}>
          <div className={styles.opportunity}>
            <ImLeaf size={16} className={styles.opportunity_icon} />
            <div className={styles.opportunity_block}>
              <p className={styles.title_opportunity}>Self care</p>
              <p className={styles.description_opportunity}>
                Our strict component selection criteria guarantee purity,
                quality and integrity.
              </p>
            </div>
          </div>

          <div className={styles.opportunity}>
            <FaPaw className={styles.opportunity_icon} />
            <div className={styles.opportunity_block}>
              <p className={styles.title_opportunity}>No cruelty</p>
              <p className={styles.description_opportunity}>
                Our products are not tested on animals. Kittens are only for big
                love.
              </p>
            </div>
          </div>

          <div className={styles.opportunity}>
            <AiFillCheckCircle size={16} className={styles.opportunity_icon} />
            <div className={styles.opportunity_block}>
              <p className={styles.title_opportunity}>Always available</p>
              <p className={styles.description_opportunity}>
                You can purchase products at any time. All products are always
                in stock.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.products_block}>
          <h2 className={styles.title_h2}>Our bestsellers</h2>

          <div className={styles.products_block_arrow}>
            <IoIosArrowBack className={styles.arrow_left} size={24} />

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
                        <div className={styles.price_div}>
                          <p className={styles.price_product}>
                            {product.price}
                          </p>
                          <p className={styles.gryvna_symbol}>₴</p>
                        </div>
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
                );
              })}
            </div>
            <IoIosArrowForward className={styles.arrow_right} size={24} />
          </div>
        </div>
      </div>

      <div className={styles.discount_block}>
        <div className={styles.title_discount}>
          <h2 className={styles.title}>Do you want a discount? - Subscribe!</h2>
          <div className={styles.input_subscribe_block}>
            <input
              className={styles.input_subscribe}
              placeholder="Email"
            ></input>
            <button
              className={classNames(styles.button_subscribe, styles.button)}
            >
              Subscribe
            </button>
          </div>
        </div>
        <p className={styles.disclaimer}>
          By clicking "Subscribe", I agree to the processing of my data
        </p>
      </div>

      <div className={styles.inner_container}>
        <div className={styles.blog_block}>
          <h2 className={styles.title_h2}>Our blog</h2>
          <div className={styles.articles}>
            {/* <IoIosArrowBack className={styles.arrow_left} size={24} /> */}
            <div className={styles.article}>
              <img
                src="./images/article1.png"
                className={styles.photo_article}
              ></img>
              <p className={styles.data_article}>30.03.2022</p>
              <p className={styles.title_article}>
                What is natural cosmetics and how to choose the right one
              </p>
              <a className={styles.read_article_link}>Read completely</a>
            </div>
            <div className={styles.article}>
              <img
                src="./images/article2.png"
                className={styles.photo_article}
              ></img>
              <p className={styles.data_article}>30.03.2022</p>
              <p className={styles.title_article}>
                What is natural cosmetics and how to choose the right one
              </p>
              <a className={styles.read_article_link}>Read completely</a>
            </div>
            <div className={styles.article}>
              <img
                src="./images/article3.png"
                className={styles.photo_article}
              ></img>
              <p className={styles.data_article}>30.03.2022</p>
              <p className={styles.title_article}>
                What is natural cosmetics and how to choose the right one
              </p>
              <a className={styles.read_article_link}>Read completely</a>
            </div>
            {/* <IoIosArrowForward className={styles.arrow_right} size={24} /> */}
          </div>
        </div>
      </div>

      <div className={styles.reviews_block}>
        <h2 className={styles.title_reviews}>Reviews</h2>
        <div className={styles.reviews_block_arrows}>
          {/* <IoIosArrowBack className={styles.arrow_left} size={24} /> */}

          <div className={styles.reviews}>
            <div className={styles.review}>
              <div className={styles.review_info}>
                <img
                  src="./images/author1.png"
                  className={styles.author_photo}
                ></img>
                <div className={styles.review_author}>
                  <p className={styles.author_name}>Marina Kalushko</p>
                  <p className={styles.review_data}>21.03.2022</p>
                </div>
              </div>

              <div className={styles.review_mark_block}>
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <AiFillStar size={18} />

                <p className={styles.review_mark}>5.0</p>
              </div>

              <p className={styles.review_text}>
                Good evening! I ordered miniatures with snail mucin. The order
                came very quickly! Special thanks for this! Now I will test!
                With the order came a lot of gifts!
              </p>
            </div>
            <div className={styles.review}>
              <div className={styles.review_info}>
                <img
                  src="./images/author2.png"
                  className={styles.author_photo}
                ></img>
                <div className={styles.review_author}>
                  <p className={styles.author_name}>Marina Kalushko</p>
                  <p className={styles.review_data}>21.03.2022</p>
                </div>
              </div>

              <div className={styles.review_mark_block}>
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <AiFillStar size={18} />

                <p className={styles.review_mark}>5.0</p>
              </div>

              <p className={styles.review_text}>
                Very cool store! Original cosmetics! Satisfied with your order
                and speed of processing and shipping! Thank you!
              </p>
            </div>
            <div className={styles.review}>
              <div className={styles.review_info}>
                <img
                  src="./images/author3.png"
                  className={styles.author_photo}
                ></img>
                <div className={styles.review_author}>
                  <p className={styles.author_name}>Marina Kalushko</p>
                  <p className={styles.review_data}>21.03.2022</p>
                </div>
              </div>

              <div className={styles.review_mark_block}>
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <AiFillStar size={18} />

                <p className={styles.review_mark}>4.9</p>
              </div>

              <p className={styles.review_text}>
                I love Benton! I've been with them for 3 years now. These are my
                favorite skin care products. The quality is consistently high.
                The service is excellent and very warm - you can feel that
                customers are loved and appreciated here.
              </p>
            </div>
          </div>
          {/* <IoIosArrowForward className={styles.arrow_right} size={24} /> */}
        </div>

        <p className={styles.see_all_reviews}>See all</p>
      </div>
      {/* </body> */}
    </React.Fragment>
  );
}

export default Main;
