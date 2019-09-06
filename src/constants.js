export const LOGIN_PAGE = 0
export const PRIVACY_PAGE = 1
export const SUCCESS_PAGE = 2

// Validate helper to check if name, email and password are valid 
export const FORM_VALID = ({ formErrorsMessages, ...rest }) => {
  let valid = true;
  // validate form errors is empty
  Object.values(formErrorsMessages).forEach(val => {
    val.length > 0 && (valid = false);
  });
  // validate the form with user details is filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  // Otherwise the form is valid
  return valid;
};

// Name is valid if it has more than 2 characters
export const NAME_CHECK = val => val.length > 2

// Email is valid if it has @ and a .
export const EMAIL_REGEX = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

// Password is valid if it has at least one digit number, one upper case character and one lower case character
export const PASSWORD_CHECK = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
)

