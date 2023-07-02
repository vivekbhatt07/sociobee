import React from "react";

const TextInput = (props) => {
  const {
    inputName,
    inputType,
    inputValue,
    inputPlaceholder,
    inputHandle,
    isValid,
    className,
  } = props;

  const classes =
    "border-2 border-stone-400 p-2 rounded w-full transition-colors duration-700 outline-0 focus:border-stone-950 dark:text-stone-950 dark:border-stone-950 dark:focus:border-[#FFA500] placeholder:text-sm caret-stone-950" +
    className;
  return (
    <input
      name={inputName}
      type={inputType}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={inputHandle}
      aria-invalid={!isValid}
      className={classes}
      required
    />
  );
};

export default TextInput;
