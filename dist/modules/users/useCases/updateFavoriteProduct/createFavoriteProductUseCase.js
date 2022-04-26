"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFavoriteProductUseCase = void 0;

var _ProductsRepository = require("../../../../../dist/modules/products/infra/typeorm/repositories/ProductsRepository");

var _UsersRepository = require("../../../../../dist/modules/users/infra/typeorm/repositories/UsersRepository");

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../../dist/shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let CreateFavoriteProductUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ProductsRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ProductsRepository.ProductsRepository === "undefined" ? Object : _ProductsRepository.ProductsRepository, typeof _UsersRepository.UsersRepository === "undefined" ? Object : _UsersRepository.UsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateFavoriteProductUseCase {
  constructor(productsRepository, usersRepository) {
    this.productsRepository = productsRepository;
    this.usersRepository = usersRepository;
  }

  async execute({
    products_ids,
    user_id
  }) {
    const favoritesProducts = await this.productsRepository.findByIds(products_ids);
    let user = await this.usersRepository.findById(user_id);

    if (!favoritesProducts) {
      throw new _AppError.AppError("Products not found");
    }

    if (!user) {
      throw new _AppError.AppError("User not found");
    }

    user.favorites_products = favoritesProducts;
    console.log(favoritesProducts);
    console.log(user.favorites_products);
    await this.usersRepository.update(user);
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.CreateFavoriteProductUseCase = CreateFavoriteProductUseCase;