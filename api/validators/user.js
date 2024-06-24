const _listBlog = {
  schema: Joi.object({
    status: Joi.any(),
    search: Joi.any(),
    page: Joi.number().integer().min(1),
    pageSize: Joi.number().integer().min(1),
    categories: Joi.string(),
  }),
  path: "query",
  name: "listBlog",
};

module.exports = { _listBlog };
