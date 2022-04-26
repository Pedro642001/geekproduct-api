"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateProductImageUseCase = void 0;

var _IProductsRepository = require("../../../../../dist/modules/products/repositories/IProductsRepository");

var _file = require("../../../../../dist/utils/file");

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../../dist/shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _class;

let UpdateProductImageUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProductsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProductsRepository.IProductsReposository === "undefined" ? Object : _IProductsRepository.IProductsReposository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateProductImageUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute({
    product_id,
    imageFile
  }) {
    const product = await this.productRepository.findById(product_id);

    if (!product) {
      throw new _AppError.AppError("Product not found");
    }

    if (product.image_url) {
      await (0, _file.deleteFile)(`./tmp/productImage/${product.image_url}`);
    }

    product.image_url = imageFile;
    await this.productRepository.update(product);
  }

}) || _class) || _class) || _class) || _class);
exports.UpdateProductImageUseCase = UpdateProductImageUseCase;