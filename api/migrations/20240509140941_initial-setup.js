const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "categories", deps: []
 * createTable() => "projects", deps: []
 * createTable() => "skills", deps: []
 * createTable() => "users", deps: []
 * createTable() => "work_experiences", deps: []
 * createTable() => "blog_posts", deps: [users, users]
 *
 */

const info = {
  revision: 1,
  name: "initial-setup",
  created: "2024-05-09T14:09:41.282Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "categories",
      {
        id: {
          type: Sequelize.UUID,
          field: "id",
          allowNull: false,
          unique: true,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        name: { type: Sequelize.STRING, field: "name", allowNull: false },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "projects",
      {
        id: {
          type: Sequelize.UUID,
          field: "id",
          allowNull: false,
          unique: true,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        projectName: {
          type: Sequelize.STRING,
          field: "projectName",
          allowNull: false,
        },
        projectDescription: {
          type: Sequelize.STRING,
          field: "projectDescription",
          allowNull: false,
        },
        projectImages: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          field: "projectImages",
          allowNull: false,
        },
        projectTools: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          field: "projectTools",
          allowNull: false,
        },
        projectUrl: {
          type: Sequelize.STRING,
          field: "projectUrl",
          allowNull: true,
        },
        projectDuration: {
          type: Sequelize.STRING,
          field: "projectDuration",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "skills",
      {
        id: {
          type: Sequelize.UUID,
          field: "id",
          allowNull: false,
          unique: true,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        skillName: {
          type: Sequelize.STRING,
          field: "skillName",
          allowNull: false,
        },
        skillLevel: {
          type: Sequelize.ENUM(
            "beginner",
            "intermediate",
            "advanced",
            "expert"
          ),
          field: "skillLevel",
          defaultValue: "intermediate",
          allowNull: false,
        },
        skillType: {
          type: Sequelize.ENUM("tech", "life"),
          field: "skillType",
          defaultValue: "tech",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "users",
      {
        id: {
          type: Sequelize.UUID,
          field: "id",
          allowNull: false,
          unique: true,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        firstName: {
          type: Sequelize.STRING,
          field: "firstName",
          allowNull: false,
        },
        middleName: {
          type: Sequelize.STRING,
          field: "middleName",
          allowNull: true,
        },
        lastName: {
          type: Sequelize.STRING,
          field: "lastName",
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          field: "email",
          unique: true,
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING(15),
          field: "phone",
          unique: true,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          field: "password",
          allowNull: true,
        },
        userType: {
          type: Sequelize.STRING,
          field: "userType",
          defaultValue: "user",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "work_experiences",
      {
        id: {
          type: Sequelize.UUID,
          field: "id",
          allowNull: false,
          unique: true,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        role: { type: Sequelize.STRING, field: "role", allowNull: false },
        company: { type: Sequelize.STRING, field: "company", allowNull: false },
        startDate: {
          type: Sequelize.DATE,
          field: "startDate",
          allowNull: false,
        },
        endDate: { type: Sequelize.DATE, field: "endDate", allowNull: true },
        jobDescription: {
          type: Sequelize.TEXT,
          field: "jobDescription",
          allowNull: false,
        },
        skills: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          field: "skills",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "blog_posts",
      {
        id: {
          type: Sequelize.UUID,
          field: "id",
          allowNull: false,
          unique: true,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        title: { type: Sequelize.STRING, field: "title", allowNull: false },
        categories: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          field: "categories",
          allowNull: false,
        },
        content: { type: Sequelize.TEXT, field: "content", allowNull: false },
        status: {
          type: Sequelize.ENUM("draft", "published", "deleted"),
          field: "status",
          defaultValue: "draft",
          allowNull: false,
        },
        publishedAt: {
          type: Sequelize.DATE,
          field: "publishedAt",
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        deletedAt: { type: Sequelize.DATE, field: "deletedAt" },
        author: {
          type: Sequelize.UUID,
          field: "author",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "users", key: "id" },
          allowNull: true,
        },
        userId: {
          type: Sequelize.UUID,
          field: "userId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "users", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["blog_posts", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["categories", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["projects", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["skills", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["users", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["work_experiences", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
