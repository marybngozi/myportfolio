require("dotenv").config();
const express = require("express");

const initDB = require("./db");
const routes = require("./routes");

const app = express();

/// Defaults
app.use(
  express.json({
    limit: process.env.BODY_LIMIT,
  })
);

// connect to db
initDB();

// api routes
app.use(routes);

// catch 404 and forwarding to error handler
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

// Handles the error and send response accordingly
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}
