import React, { createContext, useState, useContext, Children } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

const useAuth = () => createContext(AuthContext);

export { useAuth, AuthProvider };
