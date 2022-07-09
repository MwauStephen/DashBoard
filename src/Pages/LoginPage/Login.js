import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  // if (enteredName.trim() === "" && enteredEmail.trim() === "") {
  //   return;
  // }

  const formSubmitHandler = (event) => {
    // prevent default form behaviour
    event.preventDefault();

    // check for empty inputs
    if (enteredName.trim() === "" && enteredEmail.trim() === "") {
      return;
    }

    console.log(enteredName, enteredEmail);

    // clear form inputs on submission
    setEnteredName("");
    setEnteredEmail("");
  };

  const nameInputHandler = (event) => {
    console.log(event.target.value);
    setEnteredName(event.target.value);
  };
  const emailInputHandler = (event) => {
    console.log(event.target.value);
    setEnteredEmail(event.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["form"]}>
        <h2>Login Form</h2>
        <div className={styles["form-control"]}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            onChange={nameInputHandler}
            value={enteredName}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            onChange={emailInputHandler}
            value={enteredEmail}
          />
        </div>
        <div className={styles["form-actions"]}>
          <button type="submit">submit</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
