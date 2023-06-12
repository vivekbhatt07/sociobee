import React, { createContext, useState, useContext, useEffect } from "react";

import { logInService, signUpService } from "../../Utility";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("userCredentials")?.token
  );
  const [activeUser, setActiveUser] = useState(
    localStorage.getItem("userCredentials")?.user
  );

  const logInHandler = async (username, password) => {
    console.log(username, password);
    try {
      console.log("Hello");
      const logInResponse = await logInService(username, password);
      console.log(logInResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const signUpHandler = async (
    username,
    password,
    email,
    firstName,
    lastName
  ) => {
    try {
      const signUpResponse = await signUpService(
        username,
        password,
        email,
        firstName,
        lastName
      );
      if (signUpResponse.status === 201) {
        const { createdUser, encodedToken } = signUpResponse.data;
        localStorage.setItem(
          "userCredentials",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setActiveUser(createdUser);
        setToken(encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ token, activeUser, logInHandler, signUpHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
