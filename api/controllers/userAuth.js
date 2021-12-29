const User = require("../data/user");
const Verify = require("../data/accountVerify");
const jwt = require("../services/jwt");
const MakeEmailTemplate = require("../services/makeEmailTemplate");
const { sendMail, validateEmail } = require("../services/utils");
const { BadRequestError, ServerError, NotFoundError } = require("../errors");

const register = async (req, res, next) => {
  try {
    // check if the email a valid email
    const emailValid = await validateEmail(req.body.email);

    if (!emailValid.is_valid)
      throw new BadRequestError("Email address is invalid!");

    // get the mail login url
    let verifyUrl = req.body.verifyUrl || "#";

    // check if the email already exists
    const existUser = await User.getUser({ email: req.body.email });

    // if user was found
    if (existUser)
      throw new BadRequestError("Email address is already in use!");

    const newUser = await User.createUser(req.body);

    // create user email verification
    const emailVerify = await Verify.createVerification(newUser.email);

    if (!emailVerify) throw new ServerError("Failed to generate Token");

    // send email
    const emailData = {
      verifyLink: verifyUrl + "/" + emailVerify.token,
      name: newUser.firstName + " " + newUser.lastName,
      year: new Date().getFullYear(),
    };

    const message = MakeEmailTemplate("welcome.html", emailData);

    const subject = `Welcome to Appmart`;

    // send welcome/verify email tto the user
    sendMail(newUser.email, message, subject);

    return res.status(201).json({
      message: `Account created Successfully, verification email has been sent to ${newUser.email}`,
      meta: {
        currentPage: 1,
        pageSize: 1,
        pageTotal: 1,
      },
    });
  } catch (e) {
    console.log("userAuthController-create", e);
    next(e);
  }
};

const verifyAccount = async (req, res, next) => {
  try {
    // get and update the token details
    const existToken = await Verify.verifyValidToken(req.body.token);

    // if no verfication token was found
    if (!existToken) throw new NotFoundError("Invalid verification link!");

    // update the status of the user
    const userUpdate = await User.updateAccountStatus(existToken.email);

    // if no verfication was donee for user
    if (!userUpdate)
      throw new NotFoundError(
        "Invalid verification link, Account not verified!"
      );

    return res.status(200).json({
      message: "Account verification was successfully!",
    });
  } catch (e) {
    console.log("userAuthController-verify", e);
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.getUser({ email: req.body.email });

    // if the user was not found
    if (!user) throw new NotFoundError("Invalid Login details");

    // Verify Password
    const passwordCorrect = await User.verifyPassword(
      user.id,
      req.body.password
    );

    if (!passwordCorrect)
      throw new BadRequestError("Incorrect Email or Password");

    if (!user.accountVerified)
      throw new BadRequestError(
        `This account has not been verified, check you email ${user.email} for verification link!`
      );

    const token = jwt.sign(user.id);

    if (!token) throw new ServerError("Failed to generate Token");

    return res.status(200).json({
      message: "Login Successful!",
      data: {
        user,
        auth: token,
      },
      meta: {
        currentPage: 1,
        pageSize: 1,
        pageTotal: 1,
      },
    });
  } catch (e) {
    console.log("userAuthController-login", e);
    next(e);
  }
};

module.exports = {
  login,
  register,
  verifyAccount,
};
