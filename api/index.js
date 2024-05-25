const { createServer } = require("http");
const express = require("express");
const helmet = require("helmet");
const config = require("./config.js");
const db = require("./models/index.js");
const routes = require("./routes/index.js");
const morganMiddleware = require("./middlewares/morganLogger.js");
const logger = require("./utils/logger.js");

const app = express();
const server = createServer(app);

/// Defaults
app.use(
  express.json({
    limit: process.env.BODY_LIMIT,
  })
);

// Add the morgan middleware
app.use(morganMiddleware);

// api routes
app.use(routes);

// // catch 404 and forwarding to error handler
// app.use((req, res, next) => {
//   const err = new Error("Not found");
//   err.status = 404;
//   next(err);
// });

// // Handles the error and send response accordingly
// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       message: err.message,
//     },
//   });
// });

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  server.listen(config.PORT, () => {
    logger.info(`Server Running, http://localhost:${server.address().port}`);
  });
}
