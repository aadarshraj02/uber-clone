const captainModel = require("../models/captainModel");
const captainService = require("../services/captainService");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: "Captain already exist" });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
      firstName: fullname.firstName,
      lastName: fullname.lastName,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain)
      return res.status(401).json({
        message: "Invalid email or password",
      });

    const isMatch = await captain.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({
        message: "Invalid email or password",
      });

    const token = captain.generateAuthToken();

    res.cookie("token", token);

    res.status(200).json({
      token,
      captain,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.getCaptainProfile = async (req, res) => {
  try {
    res.status(200).json({
      captain: req.captain,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
