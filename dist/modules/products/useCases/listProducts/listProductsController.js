"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListProductsController = void 0;

var _tsyringe = require("tsyringe");

var _listProductsUseCase = require("./listProductsUseCase");

class ListProductsController {
  async handle(request, response) {
    const listProducts = _tsyringe.container.resolve(_listProductsUseCase.ListProductsUseCase);

    const products = await listProducts.execute();
    return response.status(201).json(products);
  }

}

exports.ListProductsController = ListProductsController;