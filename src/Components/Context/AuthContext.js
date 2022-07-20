import React, { useReducer, useEffect } from "react";

//3.intial state
const initialUserState = {
  // currentUser: JSON.parse(localStorage.getItem("user")) || null,
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

// 4.redcuer function
const userReducerFn = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      currentUser: action.payload,
    };
  } else if (action.type === "LOGOUT") {
    return { currentUser: null };
  }
  return {
    currentUser: state,
  };
};

// 1.creating the context
const AuthContext = React.createContext(initialUserState);

//2. creating and exporting the context provider
export const AuthContextProvider = (props) => {
  const [stateUser, dispatchUser] = useReducer(userReducerFn, initialUserState);

  // prevent user from logout on refresh page
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(stateUser.currentUser));
  }, [stateUser.currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser: stateUser.currentUser, dispatchUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// import React, { useReducer } from "react";

// const INITIAL_STATE = {
//   currentUser: null,
// };

// const userReducerFn = (state, action) => {
//   if (action.type === "LOGIN") {
//     return { currentUser: action.payload };
//   } else {
//     return { currentUser: null };
//   }

//   return state;
// };

// const AuthContext = React.createContext({ INITIAL_STATE });

// export const AuthContextProvider = () => {
//   const [user, dispatchUser] = useReducer(userReducerFn, INITIAL_STATE);

//   return (
//     <AuthContext.Provider
//       value={{ currentUser: user.currentUser, dispatchUser }}
//     ></AuthContext.Provider>
//   );
// };

// export default AuthContext;
