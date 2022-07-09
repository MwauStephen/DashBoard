import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <form>
      <div className={styles["form"]}>
        <h2>Login Form</h2>
        <div className={styles["form-control"]}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" />
        </div>
        <div className={styles["form-actions"]}>
          <button type="submit">submit</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
