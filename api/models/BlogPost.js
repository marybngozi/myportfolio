module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define(
    "blog_posts",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categories: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["draft", "published", "deleted"],
        defaultValue: "draft",
      },
      publishedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      paranoid: true,
    }
  );

  blogPost.associate = function (models) {
    blogPost.belongsTo(models.User, {
      foreignKey: "author",
      allowNull: false,
    });
  };

  return blogPost;
};
