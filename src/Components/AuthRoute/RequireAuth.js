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
