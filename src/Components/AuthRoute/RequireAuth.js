import React, { Fragment, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const RequireAuth = (props) => {
  // protecting routes
  // const { currentUser } = useContext(AuthContext);
  const ctx = useContext(AuthContext);
  // const currentUser = false;
  // console.log(currentUser);

  return (
    <Fragment>
      {/* {currentUser ? props.children : <Navigate to="/login" />} */}
      {ctx.currentUser ? props.children : <Navigate to="/login" />}
    </Fragment>
  );
};

export default RequireAuth;
