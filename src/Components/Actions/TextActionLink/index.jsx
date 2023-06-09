import React from "react";
import { Link } from "react-router-dom";

const TextActionLink = (props) => {
  const { children } = props;
  return <Link>{children}</Link>;
};

export default TextActionLink;
