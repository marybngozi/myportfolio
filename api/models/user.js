const { secureHash } = require("../utils/helpers.js");

async function hashData(user) {
  if (user.changed("password")) {
    user.setDataValue("password", await secureHash(user.password));
  }
  return;
}

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      middleName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
      },
    },
    {
      paranoid: true,
      hooks: {
        beforeCreate: hashData,
        beforeUpdate: hashData,
      },
    }
  );

  user.associate = function (models) {
    user.hasMany(models.BlogPost);
  };

  return user;
};
