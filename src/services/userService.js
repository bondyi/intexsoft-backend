const userRepository = require("../repositories/userRepository");

const getById = async (id) => {
  return userRepository.getById(id);
};

const getByUsername = async (username) => {
  return userRepository.getByUsername(username);
};

const create = async (data) => {
  const { username } = data;

  if (!userRepository.getByUsername(username)) {
    return new Error("This user already exists.");
  }

  return userRepository.create(data);
};

const update = async (id, data) => {
  const { username } = data;

  if (!userRepository.getByUsername(username)) {
    return new Error("No such user exists.");
  }

  return userRepository.update(id, data);
};

const remove = async (id) => {
  return await userRepository.remove(id);
};

module.exports = {
  getById,
  getByUsername,
  create,
  update,
  remove,
};
