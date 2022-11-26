import * as React from "react";
import styles from "./styles/header.module.css";
import { FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import dataService from "./ds";
import { useState, useEffect } from "react";
import { Product, Category } from "./types";

function Header() {
  const [categories, setCategories] = useState<Array<Category>>([]);

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/auth/login";
  }

  async function getCategories() {
    const { data } = await dataService.category.getCategories();
    setCategories(data);
  }

  useEffect(()=>{
    getCategories()
  }, [])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_inner}>
          <Link to="/">
            <img className={styles.logo} src="/images/logo.png" />
          </Link>
          <div className={styles.nav_div}>
            <nav className={styles.navigation}>
              <ul className={styles.ul_header}>
                <Link to="/" className={styles.link}>
                  <li className={styles.li_header}>
                    <a href="#" className={styles.a_header}>
                      Home
                    </a>
                  </li>
                </Link>

                <div className={styles.dropdown}>
                  <li className={styles.li_header}>
                   
                      Catalog
                
                  </li>
                  <div className={styles.dropdown_content}>
                    <div>
                      {categories.map((category) => {
                        return (
                          <Link to={"/catalog/" + category.name} className={styles.link}>
                            <p>{category.name}</p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <li className={styles.li_header}>
                  <a href="#" className={styles.a_header}>
                    About us
                  </a>
                </li>
                <li className={styles.li_header}>
                  <a href="#" className={styles.a_header}>
                    Delivery and Payment
                  </a>
                </li>
                <li className={styles.li_header}>
                  <a href="#" className={styles.a_header}>
                    {" "}
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>

            <div className={styles.input_search}>
              <AiOutlineSearch className={styles.icon_search} size={18} />
              <input className={styles.input} placeholder="Search.."></input>
            </div>

            <div className={styles.icons}>
              <Link to="/" className={styles.link}>
                <FaSearch size={22} className={styles.icon_search_adaptive} />
              </Link>

              {localStorage.getItem("token") ? (
                <div className={styles.dropdown}>
                  <FaUser size={22} className={styles.icon} />
                  <div className={styles.dropdown_content}>
                    <Link to="/" className={styles.link}>
                      <p> My orders</p>
                    </Link>

                    <Link to="/admin" className={styles.link}>
                      <p>Admin</p>
                    </Link>

                    <Link to="/auth/login" className={styles.link}>
                      <p onClick={logout}>Log out</p>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link to="/auth/login" className={styles.link}>
                  <FiLogIn size={22} className={styles.icon} />
                </Link>
              )}

              <Link to="/cart" className={styles.link}>
                <FaShoppingCart size={22} className={styles.icon_cart} />
              </Link>
            </div>
            <div className={styles.tablet_menu}>
              <p className={styles.menu}>Menu</p>
              <HiMenuAlt2 size={22} className={styles.icon_burger} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
