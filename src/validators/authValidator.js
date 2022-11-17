const { Joi, Segments } = require("celebrate");

const UserConstants = require("../constants/userConstants");

const usernameSchema = Joi.string()
  .alphanum()
  .min(UserConstants.MIN_USERNAME)
  .max(UserConstants.MAX_USERNAME)
  .required();

const emailSchema = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ["com", "net", "ru"] },
});

const phoneNumberSchema = Joi.string().pattern(
  new RegExp(UserConstants.PHONE_NUMBER_REGEX)
);

const passwordSchema = Joi.string()
  .pattern(new RegExp(UserConstants.PASSWORD_REGEX))
  .required();

const nameSchema = Joi.string().pattern(new RegExp(UserConstants.NAME_REGEX));

const dateOfBirthSchema = joi
  .date()
  .min(UserConstants.MIN_BIRTH)
  .max(UserConstants.MAX_BIRTH);

const registerSchema = {
  [Segments.BODY]: Joi.object({
    username: usernameSchema,
    email: emailSchema,
    phone_number: phoneNumberSchema,
    password: passwordSchema,
    repeat_password: joi.ref("password"),
    first_name: nameSchema,
    last_name: nameSchema,
    gender: joi.boolean(),
    date_of_birth: dateOfBirthSchema,
    avatarId: joi.string().dataUri(),
  }),
};

const loginSchema = {
  [Segments.BODY]: Joi.object({
    username: usernameSchema,
    email: emailSchema,
    phoneNumber: phoneNumberSchema,
    password: passwordSchema,
  }).xor("username", "email", "phoneNumber"),
};

const refreshTokenSchema = {
  [Segments.BODY]: Joi.object({
    refreshToken: Joi.string().token().required(),
  }),
};

module.exports = {
  registerSchema,
  loginSchema,
  refreshTokenSchema,
};
