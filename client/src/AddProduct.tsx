import * as React from "react";
import styles from "./styles/addProduct.module.css";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import dataService from "./ds";
import { Category } from "./types";

function AddProduct() {
  const [name, setName] = useState<string>("");
  const [images, setImages] = useState<Array<File>>([]);
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [tags, setTags] = useState<Array<string> | undefined>([]);
  const [categories, setCategories] = useState<Array<Category>>([]);

  const selectRef = useRef<HTMLOptionElement>(null);

  function uploadImages(files: FileList) {
    if (files != undefined) {
      Array.from(files).forEach((file) => {
        setImages([...images, file]);
      });
    } else {
      console.log("file error");
    }
  }

  async function getCategories() {
    const { data } = await dataService.category.getCategories();
    setCategories(data);
    console.log(data);
  }

  function deleteImage(deleteImage) {
    const newImages = images.filter((image) => image !== deleteImage);
    setImages(newImages);
  }

  async function createProduct() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    // @ts-ignore
    formData.append("tags", tags as string[]);
    // @ts-ignore
    images.forEach((image) => formData.append("images", image));
    formData.append("price", price);

    const response = await dataService.product.createProduct(
      categoryId,
      formData
    );

    setName("");
    setDescription("");
    setPrice("");
    setCategoryId("");
    setImages([]);
    setTags([]);
    selectRef.current!.selected = true
    
  }

  useEffect(() => {
    getCategories();
  }, []);

  console.log({ images });
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.add_product_page_div}>
          <div className={styles.add_product_page}>
            <h1 className={styles.page_title}>Add new product</h1>
            <div className={styles.add_product_form}>
              <div>
                <p className={styles.input_title}>Product title:</p>
                <input
                  className={styles.input}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                ></input>
              </div>

              <div>
                <p className={styles.input_title}>Description:</p>
                <textarea
                  className={styles.input}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <div className={styles.upload_image_div}>
                <label
                  htmlFor="file-upload"
                  className={styles.custom_file_upload}
                >
                  Upload image
                </label>
              </div>
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={(e) => uploadImages(e.target.files as FileList)}
              />
              <div className={styles.preview_images}>
                {images.map((image) => {
                  const src = URL.createObjectURL(image);
                  return (
                    <div className={styles.image_block}>
                      <AiFillDelete
                        className={styles.icon_delete}
                        size={28}
                        onClick={() => deleteImage(image)}
                      />
                      <img src={src} className={styles.preview_image}></img>
                    </div>
                  );
                })}
              </div>

              <div>
                <p className={styles.input_title}>Category:</p>
                <select
                  name="user_profile_color_2"
                  className={styles.input}
                  onChange={(event) => setCategoryId(event.target.value)}
  
                >
                  <option ref={selectRef} value="">Select</option>
                  {categories.map((category) => (
                    <option
                      value={category._id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className={styles.input_title}>Tags:</p>
                <input className={styles.input}></input>
              </div>
              <div className={styles.input_price}>
                <p className={styles.input_title}>Price:</p>
                <input
                  className={styles.input}
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                ></input>
              </div>
              <button
                className={styles.button_submit}
                onClick={() => createProduct()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
