module.exports = (sequelize, DataTypes) => {
  const skill = sequelize.define(
    "skills",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      skillName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      skillLevel: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["beginner", "intermediate", "advanced", "expert"],
        defaultValue: "intermediate",
      },
      skillType: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["tech", "life"],
        defaultValue: "tech",
      },
    },
    {
      paranoid: true,
    }
  );

  return skill;
};
