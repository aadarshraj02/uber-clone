const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // Token will expire after 86400 seconds (1 day)
  },
});

const BlacklistToken =
  mongoose.models.BlacklistToken ||
  mongoose.model("BlacklistToken", blacklistTokenSchema);

module.exports = BlacklistToken;
