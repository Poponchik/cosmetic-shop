import * as React from "react";
import styles from "./styles/product.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useParams } from "react-router-dom";
import dataService from "./ds";
import { Product } from "./types";
import { config } from "./config";

import { useEffect, useState } from "react";

function ProductCard() {
  const [product, setProduct] = useState<Product>();
  const [activeProductPhoto, setActiveProductPhoto] = useState<FileList>();

  let { productId } = useParams();

  async function getProduct(productId: string) {
    const { data } = await dataService.product.getProduct(productId);
    setProduct(data);
    setActiveProductPhoto(data?.images[0])
  }

  useEffect(() => {
    if (!productId) return;
    getProduct(productId);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.product_card_page}>
          <div className={styles.bc}>
            <p className={styles.catalog_bc}>Catalog</p>
            <IoIosArrowForward size={10} className={styles.icon_arrow_bc} />
            <p className={styles.catalog_bc}>Face</p>
            <IoIosArrowForward size={10} className={styles.icon_arrow_bc} />
            <p className={styles.category_bc}>
              Facial cleanser with enisms for oily skin
            </p>
          </div>
          <div className={styles.product_card}>
            <div className={styles.product_photos}>

              <img
                className={styles.main_photo_product}
                src={`${config.serverUrl}/${activeProductPhoto}`}
              ></img>

              <div className={styles.product_photos_miniature}>
                {product?.images.map((image, index) =>
                  index === 0 ? null : (
                    <img
                      className={styles.photo_product_mini}
                      src={`${config.serverUrl}/${image}`}
                      onClick={() => setActiveProductPhoto(image)}
                    ></img>
                  )
                )}
              </div>
            </div>

            <div className={styles.right_div}>
              <h2 className={styles.title_product_card}>{product?.name}</h2>
              <div className={styles.reviews_block_link}>
                <div className={styles.reviews_links}>
                  <a className={styles.reviews}>Reviews</a>
                  <a className={styles.reviews}>(15)</a>
                </div>
                <div className={styles.stars}>
                  <AiFillStar size={18} />
                  <AiFillStar size={18} />
                  <AiFillStar size={18} />
                  <AiFillStar size={18} />
                  <AiFillStar size={18} />
                </div>
              </div>
              <div className={styles.price_block}>
                <div className={styles.prices}>
                  <div className={styles.price}>{product?.price}</div>
                  {/* <div className={styles.full_price}>180 ₴</div> */}
                </div>
                <div className={styles.in_stock_block}>
                  <BsCheck />
                  <p className={styles.in_stock}>In stock</p>
                </div>
              </div>
              <button className={styles.add_button}>Add to cart</button>

              <div className={styles.accordeon}>
                <div className={styles.acor_container}>
                  <hr className={styles.line} />
                  <input type="checkbox" name="acor" id="acor1" />
                  <label htmlFor="acor1">Description</label>
                  <div className={styles.acor_body}>
                    <p>{product?.description}</p>
                  </div>
                  <hr className={styles.line} />

                  <input type="checkbox" name="acor" id="acor2" />
                  <label htmlFor="acor2">Applying</label>
                  <div className={styles.acor_body}>
                    <p>
                      Fresh, clean skin in the morning is the result of advanced
                      cleansing specifically for oily skin with the effect of
                      soft peeling, anti-acne, smoothing the microrelief and
                      tone. Washing powder gently but effectively dissolves
                      makeup residues, pore contents and toxic contaminants of
                      the metropolis.
                    </p>
                  </div>
                  <hr className={styles.line} />

                  <input type="checkbox" name="acor" id="acor3" />
                  <label htmlFor="acor3">Consist</label>
                  <div className={styles.acor_body}>
                    <p>
                      Fresh, clean skin in the morning is the result of advanced
                      cleansing specifically for oily skin with the effect of
                      soft peeling, anti-acne, smoothing the microrelief and
                      tone. Washing powder gently but effectively dissolves
                      makeup residues, pore contents and toxic contaminants of
                      the metropolis.
                    </p>
                  </div>
                  <hr className={styles.line} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.products_viewed_block}>
        
          </div>
          <div className={styles.block_reviews}>
            <div className={styles.reviews}>
              <h3>Reviews</h3>
              <div className={styles.reviews_div}>
                <div className={styles.review_data}>
                  <p className={styles.name_reviewer}>Lisa</p>
                  <p className={styles.review_date}>17 March 2022</p>
                </div>

                <div className={styles.review_text_block}>
                  <div className={styles.stars}>
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                  </div>
                  <div className={styles.review_text}>
                    The powder is really excellent, in a month of application
                    the skin has changed both visually and to the touch! Thank
                    you very much, I finally found a brand that works, I will
                    definitely continue to use and order more!
                  </div>
                </div>
              </div>

              <div className={styles.reviews_div}>
                <div className={styles.review_data}>
                  <p className={styles.name_reviewer}>Lisa</p>
                  <p className={styles.review_date}>17 March 2022</p>
                </div>

                <div className={styles.review_text_block}>
                  <div className={styles.stars}>
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                  </div>
                  <div className={styles.review_text}>
                    The powder is really excellent, in a month of application
                    the skin has changed both visually and to the touch! Thank
                    you very much, I finally found a brand that works, I will
                    definitely continue to use and order more!
                  </div>
                </div>
              </div>

              <div className={styles.reviews_div}>
                <div className={styles.review_data}>
                  <p className={styles.name_reviewer}>Lisa</p>
                  <p className={styles.review_date}>17 March 2022</p>
                </div>

                <div className={styles.review_text_block}>
                  <div className={styles.stars}>
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                    <AiFillStar size={18} />
                  </div>
                  <div className={styles.review_text}>
                    The powder is really excellent, in a month of application
                    the skin has changed both visually and to the touch! Thank
                    you very much, I finally found a brand that works, I will
                    definitely continue to use and order more!
                  </div>
                </div>
              </div>
              <div className={styles.pagination}>
                <IoIosArrowBack className={styles.arrow_left_p} />
                <div className={styles.pagination_page}>
                  <p className={styles.active_page}>1</p>
                  <p className={styles.page}>2</p>
                  <p className={styles.page}>...</p>
                  <p className={styles.page}>5</p>
                </div>
                <IoIosArrowForward className={styles.arrow_right_p} />
              </div>
            </div>
            <div className={styles.leave_feedback}>
              <h3>Leave your feedback</h3>
              <div className={styles.leave_feedback_block}>
                <input className={styles.input_name} placeholder="Name"></input>
                <textarea
                  className={styles.input_feedback}
                  placeholder="Your feedback"
                ></textarea>
                <button className={styles.add_button}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
