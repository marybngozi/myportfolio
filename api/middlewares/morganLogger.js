const morgan = require("morgan");
const logger = require("../utils/logger.js");

const stream = {
  // Use the http severity
  write: (message) => logger.http(message),
};

const morganMiddleware = morgan(
  ":remote-addr - :remote-user ':method :url HTTP/:http-version' :status ':res[content-length] - :response-time ms' ':referrer' ':user-agent'",
  { stream }
);

module.exports = morganMiddleware;
