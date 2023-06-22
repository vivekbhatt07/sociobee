import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AvatarActionLink = (props) => {
  const { className, avatar, reach, children, onClick, isLink = true } = props;
  const navigate = useNavigate();
  const classes =
    className +
    " block overflow-hidden w-12 h-12 rounded-full relative cursor-pointer";
  return (
    <div
      onClick={() => {
        onClick && onClick();
        isLink && navigate(reach);
      }}
      className={classes}
    >
      <img src={avatar} alt="user" className="w-full h-full object-cover" />
      {children}
    </div>
  );
};

export default AvatarActionLink;
