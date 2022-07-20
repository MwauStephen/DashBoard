`FIRBASE AUTHENCTICATION PROCESS`

## `Sign Up New User`-Create a form that allows new users to register with your app using their email address and a password. When a user completes the form, validate the email address and password provided by the user, then pass them to the( `createUserWithEmailAndPassword() method:`)

## The above method is used when the user has no account or when he is sigining in for the very first time.

## `Sign In User`-Create a form that allows existing users to sign in using their existing email address and password. When a user completes the form, call the (`signInWithEmailAndPassword() method:`)

## This method verifies a user if he or she has an existing account.

## First you will use the `createUserWithEmailAndPassword() method:` if the user is creating an account for the first time and then use the `signInWithEmailAndPassword() method:` to like sign in

## `useNavigate Hook` returns a function that lets you navigate programmatically, for example after a form is submitted.It is used to redirect users to a specific page through routing in react router-dom

<!--
import { useNavigate } from "react-router-dom";
const Login = () => {

  const formSubmitHandler = (event) => {
    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        navigate("/"); //navigates to the home page
        // ...
      })
      .catch((error) => {
        setError(error);
        // ..
      });
      }

}
export default login;
 -->

## For any application we are creating we need to protect the routes to specific pages..for example a user before login in shouldnt have access to the home page or any other page unless they are logged in.

## In react we use the power of `react-router-dom` to make this happen.We create a component that protects the other pages from access unless the user is logged in.

<!--

import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = (props) => {
  // protecting routes
  const currentUser = false;

  return (
    <Fragment>
      {currentUser ? props.children : <Navigate to="/login" />}
    </Fragment>
  );
};

export default RequireAuth;

 -->

## The above component checks if the current user is true ,if it is it renders the home page (props.children) else it remains on the login page.

## To use this in our routes we only need to wrap all our routes into this component to prevent access to them.

<!--
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/AuthRoute/RequireAuth";

const App=()=>{

return (
<BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route/>
             <Routes/>
            <BrowserRouter/>
             )

            }

  export default App;

 -->
