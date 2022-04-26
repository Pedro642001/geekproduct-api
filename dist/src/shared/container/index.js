"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductsRepository_1 = require("@modules/products/infra/typeorm/repositories/ProductsRepository");
var UsersRepository_1 = require("@modules/users/infra/typeorm/repositories/UsersRepository");
var tsyringe_1 = require("tsyringe");
tsyringe_1.container.registerSingleton("ProductsRepository", ProductsRepository_1.ProductsRepository);
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
