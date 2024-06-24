const express = require("express");
const { ErrorHandler } = require("../utils/errors.js");

const indexController = require("../controllers/index.js");

// import all routes
const authRoutes = require("./auth");
const userRoutes = require("./user");

const router = express();

// Routes for index views
router.use("", indexController());

// Routes for auth views
router.use("/auth", authRoutes());

// Routes for user views
router.use("/user", userRoutes());

// When route is not found, returns a json
router.use((req, res, next) => {
  return res.status(404).json({
    error: {
      message: "Requested resource was not Found",
    },
  });
});

// Handles any error from catch block and return it well
router.use(({ errName, error }, req, res, next) => {
  const { errorCode, message } = ErrorHandler(error, errName);

  return res.status(errorCode).json({
    message,
  });
});

module.exports = router;
