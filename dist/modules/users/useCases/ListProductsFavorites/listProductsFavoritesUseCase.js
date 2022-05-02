"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListFavoritesProductsUseCase = void 0;

var _UsersRepository = require("../../infra/typeorm/repositories/UsersRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

let ListFavoritesProductsUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _UsersRepository.UsersRepository === "undefined" ? Object : _UsersRepository.UsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListFavoritesProductsUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(user_id) {
    const user = await this.usersRepository.findById(user_id);

    if (!user.favorites_products) {
      return [];
    }

    const produts_favorites_ids = user.favorites_products.map(product => {
      return product._id;
    });
    return produts_favorites_ids;
  }

}) || _class) || _class) || _class) || _class);
exports.ListFavoritesProductsUseCase = ListFavoritesProductsUseCase;