const currentYear = new Date().getFullYear();

const MIN_USERNAME = 4;
const MAX_USERNAME = 24;

const PHONE_NUMBER_REGEX = "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";

const PASSWORD_REGEX = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,36}$";

const NAME_REGEX = "/^[a-z ,.'-]+$/i";

const MIN_BIRTH = currentYear - 100;
const MAX_BIRTH = currentYear - 18;

module.exports = {
  MIN_USERNAME,
  MAX_USERNAME,
  PHONE_NUMBER_REGEX,
  PASSWORD_REGEX,
  NAME_REGEX,
  MIN_BIRTH,
  MAX_BIRTH,
};
