import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useFirebase } from "../Firebase/Firebase";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { user } = useFirebase();

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
