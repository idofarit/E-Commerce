import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context/user_context";
import { useFirebase } from "../Firebase/Firebase";

const PrivateRoute = ({ children, ...rest }) => {
  console.log(children, "children");
  console.log(rest, "rest");
  const { user } = useFirebase();
  // if (!user) {
  //   return <Navigate to="/login" />;
  // }
  return user ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
