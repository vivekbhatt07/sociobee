const userNameValidation = (userNameInput) => {
  return /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/.test(
    userNameInput
  );
};

export default userNameValidation;
