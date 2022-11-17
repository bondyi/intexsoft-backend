const tokenHelper = require("../helpers/tokenHelper");
const userService = require("./userService");
const authValidator = require("../validators/authValidator");
const { removePassword } = require("../helpers/userHelper");

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;
const JWT_LIFETIME = process.env.JWT_LIFETIME;

const createTokensPair = async (data) => {
  const { id } = data;

  const accessToken = tokenHelper.generate(id, JWT_ACCESS_SECRET, {
    JWT_LIFETIME,
  });

  const refreshToken = tokenHelper.generate(id, JWT_REFRESH_SECRET, {
    JWT_LIFETIME,
  });

  return { accessToken, refreshToken };
};

const login = async (data) => {
  const { username, password } = data;

  if (!authValidator.loginSchema.validate(data)) {
    throw new Error("Data is not valid.");
  }

  const foundedUser = userService.getByUsername(username);

  if (!foundedUser) {
    throw new Error("No such user exists.");
  }

  if (password == foundedUser.password) {
    throw new Error("Wrong password.");
  }

  return createTokensPair(removePassword(foundedUser));
};

const register = async (data) => {
  if (!authValidator.registerSchema.validate(data)) {
    throw new Error("Data is not valid.");
  }

  return await userService
    .create(data)
    .then((user) => removePassword(user))
    .catch((e) => console.log(e));
};

const refreshToken = async ({ refreshToken }) => {
  if (!authValidator.refreshTokenSchema.validate({ refreshToken })) {
    throw new Error("Data is not valid.");
  }

  if (!tokenHelper.verify(refreshToken, JWT_REFRESH_SECRET)) {
    throw new Error("Refresh token is not valid.");
  }

  const { id } = tokenHelper.decode(refreshToken);

  return await createTokensPair({ id });
};

module.exports = {
  login,
  register,
  refreshToken,
};
