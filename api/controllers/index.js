const { Router } = require("express");

const api = Router();

const home = (req, res) => {
  try {
    res.status(200).json({
      message: "Welcome to Marybngozi Portfolio API",
      data: {
        projectName: "MaryBlessing Chimagbanwe Ngozichukwu Umeh",
        author: "marybngozi",
      },
    });
  } catch (error) {
    next({ errName: "indexController-home", error });
  }
};

module.exports = () => {
  // "/" - home route
  api.get("/", home);

  return api;
};
