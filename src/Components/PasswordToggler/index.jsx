import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordToggler = (props) => {
  const { children, className, isTypePassword, handleVisibility } = props;
  const classes = className + " relative";
  return (
    <div className={classes}>
      {children}
      <button
        className=" absolute z-10 p-2 right-2 top-[6px] w-8 h-8 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-stone-300"
        type="button"
        onClick={(event) => {
          event.preventDefault();
          handleVisibility(!isTypePassword);
        }}
      >
        {isTypePassword ? <VisibilityOff /> : <Visibility />}
      </button>
    </div>
  );
};

export default PasswordToggler;
