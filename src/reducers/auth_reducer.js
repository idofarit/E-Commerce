import React from "react";

const auth_reducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      user: null,
    };
  }
};

export default auth_reducer;
