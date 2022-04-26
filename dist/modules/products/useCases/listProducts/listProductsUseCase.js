"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListProductsUseCase = void 0;

var _ProductsRepository = require("../../infra/typeorm/repositories/ProductsRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

let ListProductsUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProductsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ProductsRepository.ProductsRepository === "undefined" ? Object : _ProductsRepository.ProductsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListProductsUseCase {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute() {
    const products = await this.productsRepository.findAll();
    return products;
  }

}) || _class) || _class) || _class) || _class);
exports.ListProductsUseCase = ListProductsUseCase;