module.exports = (sequelize, DataTypes) => {
  const workExperience = sequelize.define(
    "work_experiences",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      jobDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      skills: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  return workExperience;
};
