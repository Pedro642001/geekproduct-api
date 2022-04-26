"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersRoutes = void 0;

var _ensureAuthenticated = require("../../../../../dist/modules/users/middlewares/ensureAuthenticated");

var _createUserController = require("../../../../../dist/modules/users/useCases/createUser/createUserController");

var _createFavoriteProductController = require("../../../../../dist/modules/users/useCases/updateFavoriteProduct/createFavoriteProductController");

var _express = require("express");

const usersRoutes = (0, _express.Router)();
exports.usersRoutes = usersRoutes;
const createUserController = new _createUserController.CreateUserController();
const createFavoriteProduct = new _createFavoriteProductController.CreateFavoriteProductController();
usersRoutes.post("/", createUserController.handle);
usersRoutes.post("/favorite-product", _ensureAuthenticated.ensureAuthenticated, createFavoriteProduct.handle);