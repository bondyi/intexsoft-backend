const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

const getByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

const getByUsername = async (username) => {
  return await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
};

const getByPhoneNumber = async (phoneNumber) => {
  return await prisma.user.findUnique({
    where: {
      phone_number: phoneNumber,
    },
  });
};

const create = async (data) => {
  return await prisma.user.create({ data: data });
};

const update = async (id, data) => {
  return await prisma.user.create({
    where: { id: id },
    data: data,
  });
};

const remove = async (id) => {
  return await prisma.user.delete({
    where: { id: id },
  });
};

module.exports = {
  getById,
  getByEmail,
  getByPhoneNumber,
  getByUsername,
  create,
  update,
  remove,
};
