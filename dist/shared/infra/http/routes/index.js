"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _authenticate = require("./authenticate.routes");

var _products = require("./products.routes");

var _user = require("./user.routes");

const routes = (0, _express.Router)();
exports.routes = routes;
routes.use("/products", _products.productRoutes);
routes.use("/users", _user.usersRoutes);
routes.use(_authenticate.authenticateRoutes);