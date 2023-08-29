const passwordValidation = (passwordInput: string): boolean => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    passwordInput
  );
};

export default passwordValidation;
