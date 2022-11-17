const jwt = require("jsonwebtoken");

const generate = (data, secret, { expiresIn }) => {
  return jwt.sign(data, secret, { expiresIn });
};

const verify = (token, secret) => {
  return jwt.verify(token, secret);
};

const decode = (token) => {
  return jwt.decode(token);
};

module.exports = {
  generate,
  verify,
  decode,
};
