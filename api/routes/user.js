const { Router } = require("express");

const api = Router();
const userController = require("../controllers/user.js");
const { authenticate } = require("../middlewares/authenticate.js");

module.exports = () => {
  // ----------User specific routes --------------

  // "/" - get a user
  api.get("/me", authenticate, userController.getUser);

  return api;
};
