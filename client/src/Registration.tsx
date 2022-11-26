import * as React from "react";
import styles from "./styles/auth.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import dataService from "./ds";

function Registration() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function vaidation() {}

  async function registration() {
    if (!email || !password) return;
    try {
      await dataService.auth.registration(name, email, password);

      setName("");
      setEmail("");
      setPassword("");

      window.location.href = "/auth/login";
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className={styles.inner_container}>
      <div className={styles.auth_block}>
        <h1 className={styles.title}>Create an account </h1>
        <div className={styles.inputs}>
          <input
            className={styles.input}
            placeholder="First name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
          ></input>
          <input
            className={styles.input}
            placeholder="Email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          ></input>
          <input
            className={styles.input}
            placeholder="Password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          ></input>
        </div>
        <button className={styles.button_auth} onClick={() => registration()}>
          Sign up
        </button>
        <div className={styles.sign_up_block}>
          <p className={styles.not_member}>Already have an account? </p>
          <Link to="/auth/login">
            <a className={styles.sign_up}>Sign in!</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
