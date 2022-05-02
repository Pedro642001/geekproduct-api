"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersRoutes = void 0;

var _ensureAuthenticated = require("../../../../modules/users/middlewares/ensureAuthenticated");

var _createUserController = require("../../../../modules/users/useCases/createUser/createUserController");

var _listProductsFavoritesController = require("../../../../modules/users/useCases/ListProductsFavorites/listProductsFavoritesController");

var _createFavoriteProductController = require("../../../../modules/users/useCases/updateFavoriteProduct/createFavoriteProductController");

var _express = require("express");

const usersRoutes = (0, _express.Router)();
exports.usersRoutes = usersRoutes;
const createUserController = new _createUserController.CreateUserController();
const createFavoriteProduct = new _createFavoriteProductController.CreateFavoriteProductController();
const listProductsFavorites = new _listProductsFavoritesController.ListProductsFavoritesController();
usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/favorites-products", _ensureAuthenticated.ensureAuthenticated, listProductsFavorites.handle);
usersRoutes.post("/favorites-products", _ensureAuthenticated.ensureAuthenticated, createFavoriteProduct.handle);