import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logInService, signUpService } from "../../Utility";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("userCredentials"))?.token
  );
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("userCredentials"))?.user
  );

  const logInHandler = async (username, password) => {
    try {
      const logInResponse = await logInService(username, password);
      if (logInResponse.status === 200) {
        const { foundUser, encodedToken } = logInResponse.data;
        localStorage.setItem(
          "userCredentials",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setActiveUser(foundUser);
        setToken(encodedToken);
        navigate("/home", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem("userCredentials");
    setActiveUser(null);
    setToken(null);
    navigate("/", { replace: true });
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
      value={{ token, activeUser, logInHandler, logOutHandler, signUpHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
