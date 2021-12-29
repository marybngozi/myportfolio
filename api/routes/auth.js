const { Router } = require("express");

const api = Router();
const authController = require("../controllers/userAuth");
const {
  createValidator,
  verifyValidator,
  loginValidator,
} = require("../validator/user");
const { authenticate } = require("../middlewares");

module.exports = () => {
  // ----------Auth specific routes --------------

  // "/" - login a user
  api.post("/login", loginValidator, authController.login);

  // "/" - register a user
  api.post("/register", createValidator, authController.register);

  // verify a user account
  api.post("/verify", verifyValidator, authController.verifyAccount);

  return api;
};
