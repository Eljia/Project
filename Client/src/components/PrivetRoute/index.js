import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  if (!isAuth) {
    return <Redirect to="/login" />;
  } else {
    return <Route path />;
  }
};

export default PrivateRoute;
