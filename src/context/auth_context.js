import { createContext, useReducer } from "react";
import auth_reducer from "../reducers/auth_reducer";

const InitialState = {
  currentUser: null,
};

export const AuthContext = createContext(InitialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(auth_reducer, InitialState);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
