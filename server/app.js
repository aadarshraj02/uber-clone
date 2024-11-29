const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./db/db");
const userRoutes = require("./routes/userRoutes");

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

app.use("/api/users", userRoutes);

module.exports = app;
