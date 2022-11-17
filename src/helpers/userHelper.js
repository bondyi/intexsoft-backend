const removePassword = (user) => {
  delete user.password;
  return user;
};

module.exports = {
  removePassword,
};
