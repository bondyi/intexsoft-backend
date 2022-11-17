const router = require("express").Router();

const {
  getUser,
  getAuthorizedUser,
  updateAuthorizedUser,
  deleteAuthorizedUser,
} = require("../controllers/userController");

const checkAuth = require("../middlewares/checkAuth");

router.get("/:id", getUser);
router.get("/", checkAuth, getAuthorizedUser);
router.put("/", checkAuth, updateAuthorizedUser);
router.delete("/", checkAuth, deleteAuthorizedUser);

module.exports = router;
