require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  let mongoURI = process.env.MONGODB_URI;

  if (process.env.NODE_ENV == "test") {
    mongoURI = process.env.MONGODB_URI_TEST;
  }

  const options = {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  const db = mongoose.connect(mongoURI, options);

  mongoose.connection.on("connected", () => {
    console.log("Mongoose default connection open to " + mongoURI);
  });

  // If the connection throws an error
  mongoose.connection.on("error", (err) => {
    console.log("handle mongo errored connections: " + err);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection disconnected");
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("App terminated, closing mongo connections");
      process.exit(0);
    });
  });
};
