const { UnAuthorizedAccess } = require("./errors");
const { verify } = require("./jwt");
const User = require("../models/user");

const authenticate = async (req, res, next) => {
  try {
    let token =
      req.headers["x-access-token"] ||
      req.headers.authorization ||
      req.body.token ||
      req.query.token; // Express headers are auto converted to lowercase

    if (!token)
      throw new UnAuthorizedAccess("Auth token is not supplied", "N403");

    if (token.startsWith("Bearer ")) token = token.replace("Bearer", "").trim(); // Remove Bearer from string

    const userId = verify(token);

    if (!userId) {
      throw new UnAuthorizedAccess("Token not valid", "N403");
    }

    let user = await User.findById(userId);

    if (!user) {
      throw new UnAuthorizedAccess("Access denied", "N403");
    }

    user.agentId = userId;
    req.user = user;

    next();
  } catch (e) {
    console.log("middleware-authenticate-error:", e);
    next(e);
  }
};

module.exports = { authenticate };
