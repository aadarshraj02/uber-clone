const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstName")
      .isLength({
        min: 3,
      })
      .withMessage("First Name must be of 3 character long"),
    body("password")
      .isLength({
        min: 5,
      })
      .withMessage("Password must be of 5 character long"),
  ],
  userController.registerUser
);

router.post("/login", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .isLength({
      min: 5,
    })
    .withMessage("Password must be of 5 character long"),
  userController.loginUser,
]);

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);
router.get("/logout", authMiddleware.authUser, userController.logoutUser);

module.exports = router;
