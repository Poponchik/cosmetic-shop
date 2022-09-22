import * as React from "react";
import styles from "./styles/auth.module.css";
import { Link } from "react-router-dom";


function Login() {
  return (
    // <div className={styles.container}>
    <div className={styles.inner_container}>
      <div className={styles.auth_block}>
        <h1 className={styles.title}>Welcome back!</h1>
        <div className={styles.inputs}>
          <input className={styles.input} placeholder='Email'></input>
          <input className={styles.input} placeholder='Password'></input>
        </div>
        <button className={styles.button_auth}>Sign in</button>
        <div className={styles.sign_up_block}>
          <p className={styles.not_member}>Not a member yet?</p>
          <Link to='/auth/registration'>
          <a className={styles.sign_up}>Sign up!</a>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Login;
