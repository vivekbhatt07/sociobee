import React from "react";
import { Link } from "react-router-dom";

const AvatarActionLink = (props) => {
  const { className, avatar, reach, children } = props;
  const classes =
    className + " block overflow-hidden w-12 h-12 rounded-full relative";
  return (
    <Link to={reach} className={classes}>
      <img src={avatar} alt="user" className="w-full h-full object-cover" />
      {children}
    </Link>
  );
};

export default AvatarActionLink;
