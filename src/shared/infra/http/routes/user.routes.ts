import { ensureAuthenticated } from "@modules/users/middlewares/ensureAuthenticated";
import { CreateUserController } from "@modules/users/useCases/createUser/createUserController";
import { CreateFavoriteProductController } from "@modules/users/useCases/updateFavoriteProduct/createFavoriteProductController";
import { Router } from "express";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const createFavoriteProduct = new CreateFavoriteProductController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.post(
  "/favorite-product",
  ensureAuthenticated,
  createFavoriteProduct.handle
);

export { usersRoutes };
