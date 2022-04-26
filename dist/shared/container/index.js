"use strict";

var _ProductsRepository = require("../../modules/products/infra/typeorm/repositories/ProductsRepository");

var _UsersRepository = require("../../modules/users/infra/typeorm/repositories/UsersRepository");

var _tsyringe = require("tsyringe");

_tsyringe.container.registerSingleton("ProductsRepository", _ProductsRepository.ProductsRepository);

_tsyringe.container.registerSingleton("UsersRepository", _UsersRepository.UsersRepository);