"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListProductsFavoritesController = void 0;

var _tsyringe = require("tsyringe");

var _listProductsFavoritesUseCase = require("./listProductsFavoritesUseCase");

class ListProductsFavoritesController {
  async handle(request, response) {
    const {
      id: user_id
    } = request.user;

    const FindListProductsFavorites = _tsyringe.container.resolve(_listProductsFavoritesUseCase.ListFavoritesProductsUseCase);

    const listProducts = await FindListProductsFavorites.execute(user_id);
    return response.status(201).json(listProducts);
  }

}

exports.ListProductsFavoritesController = ListProductsFavoritesController;