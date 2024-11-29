const userModel = require("../models/userModel");
const userService = require("../services/userService");
const { validationResult } = require("express-validator");

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    const { firstName, lastName, email, password } = req.body;

    const hashedPassword = await userModel.hashedPassword(password);

    const user = await userService.createUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const token = user.generateAuthToken();
    res.status(201).json({
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
};
