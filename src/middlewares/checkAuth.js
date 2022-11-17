const tokenHelper = require("../helpers/tokenHelper");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[0];
  const verified = tokenHelper.verify(token, process.env.JWT_ACCESS_SECRET);

  if (!verified) return res.status(401);

  req.userId = verified.id;

  next();
};
