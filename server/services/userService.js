const userModel = require("../models/userModel");

const createUser = async ({ firstName, lastName, email, password }) => {
  if (!firstName || !lastName || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = userModel.create({
    fullname: {
      firstName,
      lastName,
    },
    email,
    password,
  });
  return user;
};

module.exports = {
  createUser,
};
