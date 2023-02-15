// const User = require("../models/user");
// const { BadRequestError } = require("../utils/errors");

const getUser = async (req, res, next) => {
  try {
    req.user.password = null;

    return res.status(200).json({
      message: "User fetched Successful!",
      user: req.user,
    });
  } catch (e) {
    console.log("userController-getUser", e);
    next(e);
  }
};

module.exports = {
  getUser,
};
