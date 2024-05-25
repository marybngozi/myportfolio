const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const config = require("../config.js");

const algorithm = "aes-256-cbc"; //Using AES encryption
const SALT_WORK_FACTOR = 10;

// Generate secret hash with crypto to use for encryption
const key = crypto
  .createHash("sha512")
  .update(config.SECRET_IV)
  .digest("hex")
  .substring(0, 32);
const encryptionIV = crypto
  .createHash("sha512")
  .update(config.SECRET_IV)
  .digest("hex")
  .substring(0, 16);

//Encrypting text
const encrypt = (text) => {
  let cipher = crypto.createCipheriv(algorithm, key, encryptionIV);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("hex");
};

// Decrypting text
const decrypt = (text) => {
  let encryptedText = Buffer.from(text, "hex");
  let decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(key),
    encryptionIV
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

const generateToken = (n) => {
  return Math.random().toFixed(n).split(".")[1];
};

const secureHash = async (text) => {
  return bcrypt.hashSync(text, SALT_WORK_FACTOR);
};

const secureCompare = (hash, text) => {
  return bcrypt.compareSync(text, hash);
};

const hidePhone = (phone) => {
  if (!phone) return "";

  return phone.replace(/(.{2})(.*)(?=.{3})/, (gp1, gp2, gp3) => {
    for (let i = 0; i < gp3.length; i++) {
      gp2 += "*";
    }
    return gp2;
  });
};

const hideEmail = (email) => {
  if (!email) return "";

  return email.replace(/(.{2})(.*)(?=@)/, (gp1, gp2, gp3) => {
    for (let i = 0; i < gp3.length; i++) {
      gp2 += "*";
    }
    return gp2;
  });
};

const formatPhone = (phone) => {
  if (!phone) return phone;

  if (phone.length == 11) return `+234${phone.substr(-10, 10)}`;

  if (phone.length > 11) {
    if (phone.includes("+") && phone.length == 15) return phone;

    return `+234${phone.substr(-10, 10)}`;
  }

  return phone.replace(/(.{2})(.*)(?=.{3})/, (gp1, gp2, gp3) => {
    for (let i = 0; i < gp3.length; i++) {
      gp2 += "*";
    }
    return gp2;
  });
};

const productReference = (serviceName, CategoryName) => {
  return `${serviceName
    .toUpperCase()
    .substr(0, 3)}${CategoryName.toUpperCase().substr(0, 3)}_${generateToken(
    4
  )}`;
};

const hashString = (str) => {
  return crypto.createHash("md5").update(str).digest("hex");
};

module.exports = {
  encrypt,
  decrypt,
  generateToken,
  secureHash,
  secureCompare,
  hidePhone,
  hideEmail,
  formatPhone,
  productReference,
  hashString,
};
