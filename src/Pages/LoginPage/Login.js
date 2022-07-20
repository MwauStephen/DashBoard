import React, { useContext, useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import AuthContext from "../../Components/Context/AuthContext";

const Login = () => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [error, setError] = useState(false);

  // const auth = getAuth();
  const navigate = useNavigate();

  const { dispatchUser } = useContext(AuthContext);

  const formSubmitHandler = (event) => {
    // prevent default form behaviour
    event.preventDefault();

    // check for empty inputs
    if (enteredPassword.trim() === "" && enteredEmail.trim() === "") {
      return;
    }

    console.log(enteredPassword, enteredEmail);

    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatchUser({ type: "LOGIN", payload: user });
        navigate("/");
        // ...
      })
      .catch((error) => {
        setError(error);
        // ..
      });

    // clear form inputs on submission
    setEnteredPassword("");
    setEnteredEmail("");
  };

  const passwordInputHandler = (event) => {
    console.log(event.target.value);
    setEnteredPassword(event.target.value);
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={passwordInputHandler}
            value={enteredPassword}
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
        {error && <p>Please enter correct details</p>}
      </div>
    </form>
  );
};

export default Login;
