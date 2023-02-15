const { Router } = require("express");

const api = Router();
const userController = require("../controllers/user");
const { authenticate } = require("../utils/middlewares");

module.exports = () => {
  // ----------User specific routes --------------

  // "/" - get a user
  api.get("/me", authenticate, userController.getUser);

  return api;
};
