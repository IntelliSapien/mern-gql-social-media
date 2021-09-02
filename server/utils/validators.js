const errorCodes = require("./error");
module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = errorCodes.USERNAME_MUST_BE_PROVIDED;
  }
  if (email.trim() === "") {
    errors.email = errorCodes.EMAIL_MUST_BE_PROVIDED;
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = errorCodes.EMAIL_IS_NOT_VALID;
    }
  }
  if (password === "") {
    errors.password = errorCodes.PASSWORD_MUST_BE_PROVIDED;
  } else if (password !== confirmPassword) {
    errors.confirmPassword =
      errorCodes.PASSWORD_AND_CONFIRM_PASSWORD_MUST_BE_SAME;
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.email = errorCodes.EMAIL_MUST_BE_PROVIDED;
  }
  if (password.trim() === "") {
    errors.password = errorCodes.PASSWORD_MUST_BE_PROVIDED;
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
