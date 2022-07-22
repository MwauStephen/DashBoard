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

`How to add new items to firestore`

## For you to upload new files to firebase you need to create a new `firebasestore Database`.There is a settle difference between firebaseStore and real time database in firebase.

## Firebase: `Realtime DB` vs `Cloud Firestore`

## "In the Realtime database, data is stored as one `large JSON tree`.Realtime Database is Firebase's original database. It's an efficient, low-latency solution for mobile apps that require synced states across clients in realtime.

## In Cloud Firestore, data is stored as a collection of documents.`Cloud Firestore`is Firebase's newest database for mobile app development. It builds on the successes of the Realtime Database with a new, more intuitive data model

## Cloud Firestore also features richer, faster queries and scales further than the Realtime Database.

`Adding files to firestore`

## For simple operations such as adding files to firebase alll you have to do is search what you wanna do on the firebase docs eg.(`add new files/add data/add new document`)

## Before adding any files to firebase you need to create a `database.`The db can be a firebasestore database or realtime database.You also need to initialize the db in ur firebase file.You also need to export the db to make it available to other components.

## You also need to choose between prodcution type and test mode db,if you choose production type you need to override the rules by setting it to `true` to enable read and write operations by the user of your application.

<!--

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
 -->

## After creating the db and exporting it you need to import `set method` in the component you want to upload data from.To create or overwrite a single document, use the set() method.When you use `set()` to create a document, you must specify an ID for the document to create

<!--
import { doc, setDoc } from "firebase/firestore";
 -->

## If the document does not exist, it will be created.If the document does exist, its contents will be overwritten with the newly provided data.The following is the promise to be added on the handler.Since its a promise the event n hanlder must/should be ansynchronous.

## Add the following promise on your form submithandler event or where you perform an event to upload the desired data.

<!--
import React from  "react"
import { doc, setDoc } from "firebase/firestore";



const Form ()=>{
const formSubmitHandler=async (event)=>{
event.preventDefault();

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
}

  <form onSubmit={formSubmitHandler}>{form contents}<form/>
}

 -->

## `setDoc` method accepts the name of the database(`db`) and then sets the name(`cities`) with and id(`LA`) of the database.

## But sometimes there isn't a meaningful ID for the document, and it's more convenient to let Cloud Firestore auto-generate an ID for you. You can do this by calling `add():`We also change `doc` to `collection` when we want firebase to generate an id automatically.

## We have to import the`add`and `collection`methods from firestore.

<!--

import { collection, addDoc } from "firebase/firestore";

// Add a new document with a generated id.
const resposne = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
});
console.log("Document written with ID: ", response.id)
 -->

## We can also add a `timeStamp property`.A Timestamp represents a point in time independent of any time zone or calendar, represented as seconds and fractions of seconds at nanosecond resolution in UTC Epoch time.

## The time stamp basicaaly adds the time and date when the data was created or when the data arrived on the firestore.

<!--

import { collection, addDoc ,sereverTimeStamp} from "firebase/firestore";

// Add a new document with a generated id.
const resposne = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan",
  timeStamp:serverTimeStamp(),
});
console.log("Document written with ID: ", response.id)
 -->

## Since for this project we have also included `authentication with email and passowrd`,so we not only need to create users in firebase store database alone but also on the authentication side.

## If we only create the users on the firebaseStore we wont be able to authenticate.So we need to create our users on the authentication side.

<!--
we create the user from the authentication side,if there is a successful user creation from the login process, we create the same users on the firebaseStore database.
 -->
