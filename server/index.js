const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/authRoutes");
const secretRouter = require("./routes/secretRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", secretRouter);

module.exports = app;
