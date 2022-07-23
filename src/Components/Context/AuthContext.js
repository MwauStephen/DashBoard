import React, { useReducer, useEffect } from "react";

//3.intial state
const initialUserState = {
  // currentUser: JSON.parse(localStorage.getItem("user")) || null,
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  // currentUser: "false",
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
    currentUser: state.currentUser,
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
