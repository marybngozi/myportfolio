const jwt = require("jsonwebtoken");
const moment = require("moment");

const { SECRET_KEY, TOKEN_VALIDITY = 30 } = process.env;

const sign = (userId) => {
  const expiryDate = moment().add(TOKEN_VALIDITY, "days").toDate();

  const epochExpiryDate = Math.round(expiryDate.getTime() / 1000);

  const token = jwt.sign(
    {
      sub: userId,
      exp: epochExpiryDate,
    },
    SECRET_KEY
  );

  return {
    token,
    expiresIn: epochExpiryDate,
  };
};

const verify = (token) => {
  try {
    const payload = jwt.verify(token, SECRET_KEY, {
      ignoreExpiration: false,
    });

    return payload.sub;
  } catch {
    return null;
  }
};

module.exports = {
  sign,
  verify,
};
