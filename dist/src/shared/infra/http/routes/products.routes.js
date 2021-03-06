"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
var upload_1 = __importDefault(require("@config/upload"));
var CreateProductController_1 = require("@modules/products/useCases/createProduct/CreateProductController");
var listProductsController_1 = require("@modules/products/useCases/listProducts/listProductsController");
var UpdateProductImageController_1 = require("@modules/products/useCases/updateProductImage/UpdateProductImageController");
var ensureAuthenticated_1 = require("@modules/users/middlewares/ensureAuthenticated");
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var productRoutes = (0, express_1.Router)();
exports.productRoutes = productRoutes;
var uploadProductImage = (0, multer_1.default)(upload_1.default.upload("./tmp/productImage"));
var createProductController = new CreateProductController_1.CreateProductController();
var uploadProductImageController = new UpdateProductImageController_1.UpdateProductImageController();
var listProductsController = new listProductsController_1.ListProductsController();
productRoutes.get("/", listProductsController.handle);
productRoutes.post("/", createProductController.handle);
productRoutes.post("/import-image", ensureAuthenticated_1.ensureAuthenticated, uploadProductImage.single("imageFile"), uploadProductImageController.handle);
