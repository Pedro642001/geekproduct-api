"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFavoriteProductController = void 0;

var _tsyringe = require("tsyringe");

var _createFavoriteProductUseCase = require("./createFavoriteProductUseCase");

class CreateFavoriteProductController {
  async handle(request, response) {
    const {
      products_ids
    } = request.body;
    const {
      id: user_id
    } = request.user;

    const createfavoriteProduct = _tsyringe.container.resolve(_createFavoriteProductUseCase.CreateFavoriteProductUseCase);

    await createfavoriteProduct.execute({
      products_ids,
      user_id
    });
    return response.status(201).send();
  }

}

exports.CreateFavoriteProductController = CreateFavoriteProductController;