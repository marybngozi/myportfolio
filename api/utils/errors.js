const logger = require("./logger.js");
class CustomError extends Error {
  constructor(errorCode, property, summary, message) {
    super();
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.errorCode = errorCode;
    this.message = summary || message;
    this.errors = {
      property,
      message: message || summary,
    };
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super();
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestError);
    }

    this.errorCode = 400;
    this.errors = {
      property: "Invalid Credentials",
      message:
        message ||
        "An invalid parameter was supplied with request, please supply appropraite params",
    };
  }
}

class ServerError extends Error {
  constructor(message) {
    super();
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServerError);
    }

    this.errorCode = 500;
    this.errors = {
      message: message || "Something went wrong, please try again",
    };
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super();
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }

    this.errorCode = 404;
    this.errors = {
      message: message || "Could Not Find Resource",
    };
  }
}

class UnAuthorizedAccess extends Error {
  constructor(message) {
    super();
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UnAuthorizedAccess);
    }

    this.errorCode = 401;
    this.errors = {
      message:
        message ||
        "You do not have sufficient permission to access this resource",
    };
  }
}

const ErrorHandler = (error, errName = null) => {
  logger.error(errName, error);

  if (error.name === "SequelizeUniqueConstraintError") {
    return {
      errorCode: 400,
      message: `${error.errors[0].path} already exists`,
    };
  }

  if (error.name === "ValidationError") {
    const message = [];
    for (const key in error.errors) {
      if (error.errors.hasOwnProperty(key)) {
        const err = error.errors[key];
        message.push(`${key} failed as ${err.kind}`);
      }
    }
    return {
      errorCode: 400,
      message,
    };
  }

  if (error.name === "CastError") {
    return {
      errorCode: 400,
      message: error.message,
    };
  }

  if (!error.errorCode) {
    return {
      errorCode: 500,
      message: "Something went wrong, try again later",
    };
  }

  return {
    errorCode: error.errorCode,
    message: error.errors.message,
  };
};

module.exports = {
  CustomError,
  BadRequestError,
  ServerError,
  UnAuthorizedAccess,
  NotFoundError,
  ErrorHandler,
};
