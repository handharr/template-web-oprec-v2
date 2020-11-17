import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

//initial state
const initialState = {
  nim: "175150400111045",
  nama: "Puras Handharmahua",
  prodi: "Sistem Informasi",
  isLogged: false,
  status: 0,
};

export const AuthContext = createContext(initialState); //create context

//create provider
export const AuthProvider = (props) => {
  const store = useReducer(reducer, initialState); // [state, dispatch]
  return (
    <AuthContext.Provider value={store}>{props.children}</AuthContext.Provider>
  );
};
