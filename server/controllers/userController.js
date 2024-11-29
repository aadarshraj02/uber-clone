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
    const { fullname, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstName: fullname.firstName,
      lastName: fullname.lastName,
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

const loginUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select("+password");

    if (!user)
      return res.status(404).json({
        message: "User not found",
      });
    const isMatch = await user.comparePassword(password);

    if (!isMatch)
      return res.status(401).json({
        message: "Invalid email or password",
      });
    const token = user.generateAuthToken();
    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
