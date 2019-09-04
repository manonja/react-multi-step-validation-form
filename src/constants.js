export const LOGIN_PAGE = 0
export const PRIVACY_PAGE = 1
export const SUCCESS_PAGE = 2

export const EMAIL_REGEX = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

export const PASSWORD_CHECK = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
)
