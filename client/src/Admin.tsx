import * as React from "react";
import styles from "./styles/admin.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Product, Category, Tag } from "./types";
import dataService from "./ds";
import { config } from "./config";
import { useState, useEffect, useRef } from "react";

function Admin() {
  const [category, setCategory] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [tags, setTags] = useState<Array<Tag>>([]);
  const [editableTag, setEditableTag] = useState<string>("");
  const [editInputTag, setEditInputTag] = useState<string>("");
  const [products, setProducts] = useState<Array<Product>>([]);

  const tagName = useRef();

  async function createCategory() {
    await dataService.category.createCategory(category);
    setCategory("");
    getCategories();
  }

  async function createTag() {
    await dataService.tag.createTag(tag);
    setTag("");
    getAllTags();
  }

  async function getAllTags() {
    const { data } = await dataService.tag.getAllTags();
    setTags(data);
  }

  async function deleteTag(tagId: string) {
    await dataService.tag.deleteTag(tagId);
    getAllTags();
  }

  async function editTag(tagId, name) {
    await dataService.tag.changeTag(tagId, name);
    getAllTags();
    setEditableTag('')
  }

  async function deleteCategory(categoryId) {
    await dataService.category.deleteCategory(categoryId);
    getCategories();
  }

  async function getCategories() {
    const { data } = await dataService.category.getCategories();
    setCategories(data);
  }

  async function editCategory(categoryId, name) {
    await dataService.category.editCategory(categoryId, name)
    getCategories()
  }

  async function getProducts() {
    const { data } = await dataService.product.getAllProducts();
    setProducts(data);
  }

  async function deletePost(productId: string) {
    await dataService.product.deleteProduct(productId);

    getProducts();
  }

  useEffect(() => {
    getProducts();
    getCategories();
    getAllTags();
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

          <button
            type="button"
            className={styles.btn_primary}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Edit categories
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className={styles.modal_header}>
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit categories
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className={styles.categories_list}>
                  {categories.map((category) => (
                    <div className={styles.category_div}>
                      <AiFillDelete
                        className={styles.icon_delete}
                        size={24}
                        onClick={() => deleteCategory(category._id)}
                      />

                      <p className={styles.category_name}>{category.name}</p>
                    </div>
                  ))}
                </div>

                <div className="modal-body">
                  <div className={styles.input_div}>
                    <input
                      value={category}
                      placeholder="New category"
                      className={styles.input_category}
                      onChange={(event) => {
                        setCategory(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    onClick={() => {
                      createCategory();
                    }}
                    className={styles.btn_save}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className={styles.btn_primary}
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className={styles.btn_primary}
            data-toggle="modal"
            data-target="#madalTags"
          >
            Edit tags
          </button>

          <div
            className="modal fade"
            id="madalTags"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className={styles.modal_header}>
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit tags
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className={styles.categories_list}>
                  {tags.map((tag) => (
                    <div className={styles.category_div}>
                      <AiFillDelete
                        className={styles.icon_delete}
                        size={24}
                        onClick={() => deleteTag(tag._id)}
                      />
                      <AiFillEdit
                        size={24}
                        onClick={() => {
                          setEditableTag(tag._id);
                          setEditInputTag(tag.tag);
                          //@ts-ignore
                          tagName.current.value = tag.tag;
                        }}
                      />
                      {editableTag === tag._id ? (
                        <div className={styles.edit_tag_block}>
                          <input
                            value={editInputTag}
                            placeholder="Edit tag"
                            //@ts-ignore
                            ref={tagName}
                            onChange={(event) => {
                              setEditInputTag(event.target.value);
                            }}
                          />
                          <button
                            className={styles.button_save}
                            onClick={() => editTag(tag._id, editInputTag)}
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <p className={styles.category_name}>{tag.tag}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="modal-body">
                  <div className={styles.input_div}>
                    <input
                      value={tag}
                      placeholder="New tag"
                      className={styles.input_category}
                      onChange={(event) => {
                        setTag(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    onClick={() => {
                      createTag();
                    }}
                    className={styles.btn_save}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className={styles.btn_primary}
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.products_block}>
            <div className={styles.products}>
              {products.map((product) => {
                return (
                  <Link to={"/p/" + product._id} className={styles.link}>
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
                        <div className={styles.icons}>
                          <Link to="/editProduct" className={styles.link}>
                            <AiFillEdit size={26} />
                          </Link>
                          <Link to="/admin" className={styles.link}>
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
