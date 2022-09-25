import * as React from "react";
import styles from "./styles/auth.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import dataService from "./ds";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function login() {
    try {
      const {data} = await dataService.auth.login(email, password)

      setEmail('')
      setPassword('')

      localStorage.setItem('token', data.token)
      window.location.href = "/"

    } catch (e) {
      alert(e);
    }
  }

  return (
    // <div className={styles.container}>
    <div className={styles.inner_container}>
      <div className={styles.auth_block}>
        <h1 className={styles.title}>Welcome back!</h1>
        <div className={styles.inputs}>
          <input
            className={styles.input}
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <input
            className={styles.input}
            type='password'
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <button className={styles.button_auth} onClick={() => login()}>
          Sign in
        </button>
        <div className={styles.sign_up_block}>
          <p className={styles.not_member}>Not a member yet?</p>
          <Link to="/auth/registration">
            <a className={styles.sign_up}>Sign up!</a>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Login;
