"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProductUseCase = void 0;

var _IProductsRepository = require("../../repositories/IProductsRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateProductUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProductsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProductsRepository.IProductsReposository === "undefined" ? Object : _IProductsRepository.IProductsReposository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateProductUseCase {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute({
    name,
    description
  }) {
    const newProduct = await this.productsRepository.create({
      name,
      description
    });
    return newProduct;
  }

}) || _class) || _class) || _class) || _class);
exports.CreateProductUseCase = CreateProductUseCase;