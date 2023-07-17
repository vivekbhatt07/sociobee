import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

const AvatarActionLink = (props) => {
  const { className, avatar, reach, children, onClick, isLink = true } = props;
  const navigate = useNavigate();
  const classes =
    className +
    " block overflow-hidden w-12 h-12 rounded-full relative cursor-pointer";
  return avatar ? (
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
  ) : (
    <Skeleton variant="circular" animation="pulse" width={48} height={48} />
  );
};

export default AvatarActionLink;
