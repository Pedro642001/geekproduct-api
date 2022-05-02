import uploadConfig from "@config/upload";
import { CreateProductController } from "@modules/products/useCases/createProduct/CreateProductController";
import { ListProductsController } from "@modules/products/useCases/listProducts/listProductsController";
import { UpdateProductImageController } from "@modules/products/useCases/updateProductImage/UpdateProductImageController";
import { ensureAuthenticated } from "@modules/users/middlewares/ensureAuthenticated";
import { Router } from "express";
import multer from "multer";

const productRoutes = Router();

const uploadProductImage = multer(uploadConfig);
const createProductController = new CreateProductController();
const uploadProductImageController = new UpdateProductImageController();
const listProductsController = new ListProductsController();

productRoutes.get("/", listProductsController.handle);

productRoutes.post("/", createProductController.handle);

productRoutes.post(
  "/import-image",
  ensureAuthenticated,
  uploadProductImage.single("imageFile"),
  uploadProductImageController.handle
);

export { productRoutes };
