import React from "react";

const TextInputLabel = (props) => {
  const { className, children, labelText } = props;
  const classes = className + " flex flex-col gap-2";
  return (
    <label className={classes}>
      <span>{labelText}</span>
      {children}
    </label>
  );
};

export default TextInputLabel;
