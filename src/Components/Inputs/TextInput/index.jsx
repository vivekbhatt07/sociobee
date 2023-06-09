import React from "react";

const TextInput = (props) => {
  const { inputName, inputType, inputValue, inputPlaceholder, inputHandle } =
    props;
  return (
    <input
      name={inputName}
      type={inputType}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={inputHandle}
      className="border p-2 rounded"
      required
    />
  );
};

export default TextInput;
