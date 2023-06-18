import React from "react";
import { useLocation } from "react-router-dom";
import PrivateContainer from "../../Components/PrivateContainer";

const Account = () => {
  const location = useLocation();
  // console.log(location);
  return <PrivateContainer />;
};

export default Account;
