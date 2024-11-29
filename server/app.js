const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const captainRoutes = require("./routes/captainRoutes");

dotenv.config();
const cors = require("cors");

const app = express();

app.use(cors());
connectToDB();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/captain", userRoutes);

module.exports = app;
