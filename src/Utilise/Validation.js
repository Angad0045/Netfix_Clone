export const checkValidation = (email, password) => {
  const checkEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(
    email
  );

  const checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!checkEmail) return "Please Enter a Valid email ID";
  if (!checkPassword) return "Please Enter a Valid Passsword";

  return null;
};
