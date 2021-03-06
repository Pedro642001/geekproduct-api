"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productRoutes = void 0;

var _upload = _interopRequireDefault(require("../../../../config/upload"));

var _CreateProductController = require("../../../../modules/products/useCases/createProduct/CreateProductController");

var _listProductsController = require("../../../../modules/products/useCases/listProducts/listProductsController");

var _UpdateProductImageController = require("../../../../modules/products/useCases/updateProductImage/UpdateProductImageController");

var _ensureAuthenticated = require("../../../../modules/users/middlewares/ensureAuthenticated");

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productRoutes = (0, _express.Router)();
exports.productRoutes = productRoutes;
const uploadProductImage = (0, _multer.default)(_upload.default);
const createProductController = new _CreateProductController.CreateProductController();
const uploadProductImageController = new _UpdateProductImageController.UpdateProductImageController();
const listProductsController = new _listProductsController.ListProductsController();
productRoutes.get("/", listProductsController.handle);
productRoutes.post("/", createProductController.handle);
productRoutes.post("/import-image", _ensureAuthenticated.ensureAuthenticated, uploadProductImage.single("imageFile"), uploadProductImageController.handle);