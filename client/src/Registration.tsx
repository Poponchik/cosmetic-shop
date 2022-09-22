import * as React from "react";
import styles from "./styles/auth.module.css";
import { Link } from "react-router-dom";


function Registration() {
  return (
    <div className={styles.inner_container}>
      <div className={styles.auth_block}>
        <h1 className={styles.title}>Create an account </h1>
        <div className={styles.inputs}>
          <input className={styles.input} placeholder='First name'></input>
          <input className={styles.input} placeholder='Email'></input>
          <input className={styles.input} placeholder='Password'></input>
          <input className={styles.input} placeholder='Confirm password'></input>
        </div>
        <button className={styles.button_auth}>Sign up</button>
        <div className={styles.sign_up_block}>
          <p className={styles.not_member}>Already have an account? </p>
          <Link to='/auth/login'>
            <a className={styles.sign_up}>Sign in!</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;