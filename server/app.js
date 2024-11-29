const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./db/db");

dotenv.config();
const cors = require("cors");

const app = express();
app.use(cors());
connectToDB();

module.exports = app;
