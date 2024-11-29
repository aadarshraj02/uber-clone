const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First Name must be at least of 3 characters"],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, "Last Name must be at least of 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, "Email must be at least of 5 characters"],
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },
});
