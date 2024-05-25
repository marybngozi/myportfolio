const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const config = require("../config.js")["production"];
const logger = require("../utils/logger.js");
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect || "postgres",
    logging: (msg) => logger.debug(msg),
  }
);

// load models
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    db[file.split(".")[0]] = model(sequelize, Sequelize.DataTypes);
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .authenticate()
  .then(() => {
    logger.info("DB Connection has been established successfully.");
  })
  .catch((error) => {
    logger.error("Unable to connect to the database:", error.message);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
