const express = require("express");
const { ErrorHandler } = require("../utils/errors");

const indexController = require("../controllers/index");

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
  const message = "Not Found";
  return res.status(404).json({
    error: {
      message,
    },
  });
});

// Handles any error from catch block and return it well
router.use((error, req, res, next) => {
  const { errorCode, message } = ErrorHandler(error);

  return res.status(errorCode).json({
    error: {
      message,
    },
  });
});

module.exports = router;
