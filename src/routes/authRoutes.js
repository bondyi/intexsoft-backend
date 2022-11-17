const router = require("express").Router();

const { celebrate, Joi, errors, Segments } = require("celebrate");
const { loginScheme } = require("../validators/authValidator");

const {
  login,
  refreshToken,
  register,
} = require("../controllers/authController");

router.post(
  "/login",
  celebrate({
    [Segments.BODY]: loginScheme,
    [Segments.QUERY]: {
      token: Joi.string().token().required(),
    },
  }),
  login
);

router.post("/register", register);
router.get("/refresh", refreshToken);

module.exports = router;
