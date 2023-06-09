import React from "react";

const TextInputLabel = (props) => {
  const { className, children, labelText } = props;
  const classes = className + "";
  return (
    <label className={classes}>
      <span>{labelText}</span>
      {children}
    </label>
  );
};

export default TextInputLabel;
