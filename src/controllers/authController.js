const authService = require("../services/authService");

const login = (req, res) => {
  authService
    .login(req.body)
    .then((tokensPair) => res.send(tokensPair))
    .catch((e) => res.status(400).send(e.message));
};

const register = (req, res) => {
  authService
    .register(req.body)
    .then(() => res.status(201).send("OK"))
    .catch((e) => res.status(400).send(e));
};

const refreshToken = (req, res) => {
  authService
    .refreshToken(req.body)
    .then((tokensPair) => res.send(tokensPair))
    .catch((e) => res.send(e));
};

module.exports = {
  login,
  register,
  refreshToken,
};
