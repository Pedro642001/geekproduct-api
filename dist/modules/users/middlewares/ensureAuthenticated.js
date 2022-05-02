"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

var _AppError = require("../../../shared/errors/AppError");

var _UsersRepository = require("../infra/typeorm/repositories/UsersRepository");

async function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new _AppError.AppError("User isn't authenticated", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const {
      sub: user_id
    } = (0, _jsonwebtoken.verify)(token, process.env.KEY_TOKEN);
    const usersRepository = new _UsersRepository.UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new _AppError.AppError("User does not exists!", 401);
    }

    request.user = {
      id: user_id
    };
    next();
  } catch {
    throw new _AppError.AppError("Invalid token!", 401);
  }
}