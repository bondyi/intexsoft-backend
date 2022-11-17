const userService = require("../services/userService");

const getUser = (req, res) => {
  const userId = req.params.id;

  userService
    .getById(userId)
    .then((user) => {
      if (!user) {
        res.status(404).json({
          message: "User with id ${id} is not found.",
        });
      }

      res.json(removePassword(user));
    })
    .catch((e) => {
      res.send(e);
    });
};

const getAuthorizedUser = (req, res) => {
  const userId = req.userId;

  userService
    .getById(userId)
    .then((user) => {
      res.send(removePassword(user));
    })
    .catch((e) => {
      res.send(e);
    });
};

const updateAuthorizedUser = (req, res) => {
  const userId = req.userId;

  userService
    .update(userId, req.body)
    .then((user) => {
      res.send(removePassword(user));
    })
    .catch((e) => {
      res.send(e);
    });
};

const deleteAuthorizedUser = (req, res) => {
  const userId = req.userId;

  userService
    .remove(userId)
    .then(() => res.status(204).send())
    .catch((e) => {
      res.send(e);
    });
};

module.exports = {
  getUser,
  getAuthorizedUser,
  updateAuthorizedUser,
  deleteAuthorizedUser,
};
