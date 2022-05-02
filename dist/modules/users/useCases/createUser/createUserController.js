"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;

var _tsyringe = require("tsyringe");

var _createUserUseCase = require("./createUserUseCase");

class CreateUserController {
  async handle(request, response) {
    const {
      name,
      email,
      password
    } = request.body;

    const createUser = _tsyringe.container.resolve(_createUserUseCase.CreateUserUseCase);

    const newUser = await createUser.execute({
      name,
      email,
      password
    });
    return response.status(201).send();
  }

}

exports.CreateUserController = CreateUserController;