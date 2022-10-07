import * as React from "react";
import styles from "./styles/addProduct.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

function AddProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.add_product_page_div}>
          <div className={styles.add_product_page}>
            <h1 className={styles.page_title}>Add new product</h1>
            <div className={styles.add_product_form}>
              <div>
                <p className={styles.input_title}>Product title:</p>
                <input className={styles.input}></input>
              </div>

              <div>
                <p className={styles.input_title}>Description:</p>
                <textarea className={styles.input}></textarea>
              </div>
              <div className={styles.upload_image_div}>
                <label
                  htmlFor="file-upload"
                  className={styles.custom_file_upload}
                >
                  Upload image
                </label>
              </div>
              <input id="file-upload" type="file" />
              <div>
                <p className={styles.input_title}>Category:</p>
                <select name="user_profile_color_2" className={styles.input}>
                  <option value="">Select</option>
                  <option value="1">Face</option>
                  <option value="2">Body</option>
                  <option value="3">Hair</option>
                </select>
              </div>
              <div>
                <p className={styles.input_title}>Tags:</p>
                <input className={styles.input}></input>
              </div>
              <div className={styles.input_price}>
                <p className={styles.input_title}>Price:</p>
                <input className={styles.input}></input>
              </div>
              <button className={styles.button_submit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
