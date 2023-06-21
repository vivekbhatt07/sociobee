import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useAuth();

  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
