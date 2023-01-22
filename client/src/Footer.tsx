import * as React from "react";
import styles from "./styles/footer.module.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner_footer}>
        <div className={styles.logo_block}>
          <img src="./images/logo2.png" className={styles.logo}></img>
        </div>
        <nav className={styles.navigation_footer}>
          <ul className={styles.ul_nav}>
            <li className={styles.l_nav}>
              <a href="#" className={styles.a_nav}>
                Home
              </a>
            </li>
            <li className={styles.l_nav}>
              <a href="#" className={styles.a_nav}>
                Catalog
              </a>
            </li>
            <li className={styles.l_nav}>
              <a href="#" className={styles.a_nav}>
                About us
              </a>
            </li>
            <li className={styles.l_nav}>
              <a href="#" className={styles.a_nav}>
                Delivery and Payment
              </a>
            </li>
            <li className={styles.l_nav}>
              <a href="#" className={styles.a_nav}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.socials}>
          <RiInstagramFill size={26} className={styles.icon} />
          <FaTelegramPlane size={26} className={styles.icon} />
          <FaViber size={26} className={styles.icon} />
          {/* </div> */}
        </div>
      </div>
      <p className={styles.rights_reserved_footer}>© All rights reserved.</p>
    </footer>
  );
}

export default Footer;
