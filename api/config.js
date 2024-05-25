const { config } = require("dotenv");

config();

const {
  APIPORT,
  BODY_LIMIT,
  SECRET_KEY,
  SECRET_IV,
  DB_NAME,
  DB_USER,
  DB_HOST,
  DB_PASSWORD,
  DB_DIALECT,
  EMAIL_FROM,
  EMAIL_PASSWORD,
  EMAIL_HOST,
  EMAIL_SENDER,
  AWS_REGION,
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_BUCKET_NAME,
  AWS_BUCKET_URL,
} = process.env;

module.exports = {
  // APP
  PORT: APIPORT,
  BODY_LIMIT,
  SECRET_KEY,
  SECRET_IV,
  QUERY_LIMIT: 1000,
  QUERY_PAGE: 1,

  // DATABASE
  production: {
    database: DB_NAME,
    username: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    dialect: DB_DIALECT || "postgres",
  },

  // EMAIL
  EMAIL_FROM,
  EMAIL_PASSWORD,
  EMAIL_HOST,
  EMAIL_SENDER,

  // AWS
  AWS_REGION,
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_BUCKET_NAME,
  AWS_BUCKET_URL,
};
