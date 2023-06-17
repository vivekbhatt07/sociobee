import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";

const PrivateRoute = () => {
  const { token } = useAuth();
  // return token ?
};

export default PrivateRoute;
