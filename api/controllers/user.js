const { User } = require("../models/index.js");
const {
  BadRequestError,
  ServerError,
  NotFoundError,
} = require("../utils/errors");

const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.userId,
      },
      attributes: { exclude: ["password"] },
    });

    return res.status(200).json({
      message: "User fetched Successful!",
      user,
    });
  } catch (error) {
    next({ errName: "userController-getUser", error });
  }
};

module.exports = {
  getUser,
};
