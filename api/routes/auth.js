const { Router } = require("express");

const api = Router();
const authController = require("../controllers/auth");
// const { authenticate } = require("../utils/middlewares");

module.exports = () => {
  // ----------Auth specific routes --------------

  // "/" - login a user
  api.post("/login", authController.login);
  api.post("/add-admin", authController.addAdmin);

  return api;
};
