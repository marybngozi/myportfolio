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
  } catch (e) {
    console.log("indexController-home", e);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = () => {
  // "/" - home route
  api.get("/", home);

  return api;
};
