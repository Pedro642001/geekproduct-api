"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateProductImageController = void 0;

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../shared/errors/AppError");

var _UpdateProductImageUseCase = require("./UpdateProductImageUseCase");

class UpdateProductImageController {
  async handle(request, response) {
    const {
      id
    } = request.body;
    const imageFile = request.file?.filename;

    if (!imageFile) {
      throw new _AppError.AppError("image not found!");
    }

    const updateProductImage = _tsyringe.container.resolve(_UpdateProductImageUseCase.UpdateProductImageUseCase);

    const productUpdated = updateProductImage.execute({
      product_id: id,
      imageFile
    });
    return response.status(204).json(productUpdated);
  }

}

exports.UpdateProductImageController = UpdateProductImageController;