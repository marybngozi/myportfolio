const User = require("../models/user");
const jwt = require("../utils/jwt");
const {
  BadRequestError,
  ServerError,
  NotFoundError,
} = require("../utils/errors");

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      throw new NotFoundError("Invalid Login details");

    const user = await User.findOne({ username });

    // if the user was not found
    if (!user) throw new NotFoundError("Invalid Login details");

    // Verify Password
    const passwordCorrect = await user.comparePassword(password);

    if (!passwordCorrect)
      throw new BadRequestError("Incorrect Email or Password");

    const token = jwt.sign(user.id);

    if (!token) throw new ServerError("Failed to generate Token");
    user.password = null;

    return res.status(200).json({
      message: "Login Successful!",
      token: token.token,
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
