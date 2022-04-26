"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserController = void 0;

var _tsyringe = require("tsyringe");

var _authenticateUserUseCase = require("./authenticateUserUseCase");

class AuthenticateUserController {
  async handle(request, response) {
    const {
      email,
      password
    } = request.body;

    const authenticateUser = _tsyringe.container.resolve(_authenticateUserUseCase.AuthenticateUserUseCase);

    const authenticateInfo = await authenticateUser.execute({
      email,
      password
    });
    return response.status(201).json(authenticateInfo);
  }

}

exports.AuthenticateUserController = AuthenticateUserController;