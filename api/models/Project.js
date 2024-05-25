const config = require("../config.js");

module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define(
    "projects",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectImages: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        get() {
          return this.getDataValue("projectImages").map(
            (img) => `${config.AWS_BUCKET_URL}/projects/${img}`
          );
        },
      },
      projectTools: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      projectUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      projectDuration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  return project;
};
