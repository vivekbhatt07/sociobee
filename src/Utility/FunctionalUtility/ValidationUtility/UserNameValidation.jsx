const userNameValidation = (userNameInput) => {
  return /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(userNameInput);
};

export default userNameValidation;
