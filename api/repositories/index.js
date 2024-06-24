const { QUERY_LIMIT, QUERY_PAGE } = require("../config.js");

const prePaginate = ({ page = QUERY_PAGE, pageSize = QUERY_LIMIT }) => {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(page);
  const offset = (currentPage - 1) * limit;

  return {
    offset,
    limit,
    currentPage,
  };
};

const postPaginate = (result, currentPage, limit) => {
  return {
    totalItems: result.count,
    totalPages: Math.ceil(result.count / limit),
    currentPage,
    items: result.rows,
  };
};

module.exports = { prePaginate, postPaginate };
