const { UnAuthorizedAccess } = require("../utils/errors");
const { verify } = require("../utils/jwt");
const { User } = require("../models/index.js");

const authenticate = async (req, res, next) => {
  try {
    let token = req.headers["x-access-token"] || req.headers.authorization; // Express headers are auto converted to lowercase

    if (!token)
      throw new UnAuthorizedAccess("Auth token is not supplied", "N403");

    if (token.startsWith("Bearer ")) token = token.replace("Bearer", "").trim(); // Remove Bearer from string

    const userId = verify(token);

    if (!userId) {
      throw new UnAuthorizedAccess("Token not valid", "N403");
    }

    let user = await User.findByPk(userId);

    if (!user) {
      throw new UnAuthorizedAccess("Access denied", "N403");
    }

    req.userId = userId;
    req.user = user;

    next();
  } catch (e) {
    console.log("middleware-authenticate-error:", e);
    next(e);
  }
};

module.exports = { authenticate };
