import * as React from "react";
import styles from "./styles/header.module.css";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_inner}>
          <Link to="/">
            <img className={styles.logo} src="./images/logo.png" />
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

                <Link to="/catalog" className={styles.link}>
                  <li className={styles.li_header}>
                    <a href="#" className={styles.a_header}>
                      Catalog
                    </a>
                  </li>
                </Link>

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
              <Link to="/auth/login" className={styles.link}>
                <FaUser size={22} />
              </Link>

              <Link to="/cart" className={styles.link}>
                <FaShoppingCart size={22} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
