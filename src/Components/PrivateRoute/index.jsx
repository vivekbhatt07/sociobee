import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { token } = JSON.parse(localStorage.getItem("userCredentials"));

  return token ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
