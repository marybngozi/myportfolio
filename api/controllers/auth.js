const { User } = require("../models/index.js");
const jwt = require("../utils/jwt");
const {
  BadRequestError,
  ServerError,
  NotFoundError,
} = require("../utils/errors");
const { secureCompare } = require("../utils/helpers.js");

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      throw new NotFoundError("Invalid Login details");

    const user = await User.findOne({
      where: {
        email: username,
      },
    });

    // if the user was not found
    if (!user) throw new NotFoundError("Invalid Login details");

    // Verify Password
    const passwordCorrect = secureCompare(user.password, password);
    if (!passwordCorrect) throw new BadRequestError("Incorrect Login Details");

    const token = jwt.sign(user.id);

    if (!token) throw new ServerError("Failed to generate Token");
    user.password = null;

    return res.status(200).json({
      message: "Login Successful!",
      token: token.token,
      user,
    });
  } catch (e) {
    console.log("authController-login", e);
    next(e);
  }
};

const addAdmin = async (req, res, next) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;
    if (!username || !password) throw new BadRequestError("Invalid details");

    const userExists = await User.findOne({ $or: [{ username }, { email }] });

    // if the user was not found
    if (userExists)
      throw new BadRequestError("Username or email is aleady taken");

    const user = new User(req.body);
    await user.save();

    // if the user was not found
    if (!user) throw new BadRequestError("Invalid details");

    return res.status(200).json({
      message: "Create admin Successful!",
      data: {
        user,
      },
    });
  } catch (e) {
    console.log("authController-addAdmin", e);
    next(e);
  }
};

module.exports = {
  login,
  addAdmin,
};
