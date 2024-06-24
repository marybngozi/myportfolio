const { Op } = require("sequelize");
const { BlogPost, User } = require("../models/index.js");
const {
  BadRequestError,
  ServerError,
  NotFoundError,
} = require("../utils/errors");
const { prePaginate, postPaginate } = require("../repositories/index.js");

const listBlog = async (req, res, next) => {
  try {
    const { search = "", page, pageSize, status, category } = req.query;

    const { offset, limit, currentPage } = prePaginate({ page, pageSize });
    const result = await BlogPost.findAndCountAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${search}%` } },
          { content: { [Op.iLike]: `%${search}%` } },
        ],
        ...(status && { status: status }),
        ...(category && { categories: { [Op.contains]: [category] } }),
      },
      attributes: [
        "id",
        "title",
        "content",
        "categories",
        "status",
        "createdAt",
        "publishedAt",
      ],
      include: [
        {
          model: User,
          // as: "author",
          attributes: ["id", "firstName", "lastName"],
        },
      ],
      offset,
      limit,
    });

    return res.status(200).json({
      message: "Blog posts retrieved successfully!",
      data: {
        ...postPaginate(result, currentPage, limit),
      },
    });
  } catch (error) {
    next({ errName: "blogController-listBlog", error });
  }
};

module.exports = {
  listBlog,
};
