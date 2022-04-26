"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProductController = void 0;

var _tsyringe = require("tsyringe");

var _CreateProductUseCase = require("./CreateProductUseCase");

class CreateProductController {
  async handle(request, response) {
    const {
      name,
      description
    } = request.body;

    const createProduct = _tsyringe.container.resolve(_CreateProductUseCase.CreateProductUseCase);

    const newProduct = await createProduct.execute({
      name,
      description
    });
    return response.status(200).json(newProduct);
  }

}

exports.CreateProductController = CreateProductController;