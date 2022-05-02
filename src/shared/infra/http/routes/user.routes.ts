import { ensureAuthenticated } from "@modules/users/middlewares/ensureAuthenticated";
import { CreateUserController } from "@modules/users/useCases/createUser/createUserController";
import { ListProductsFavoritesController } from "@modules/users/useCases/ListProductsFavorites/listProductsFavoritesController";
import { CreateFavoriteProductController } from "@modules/users/useCases/updateFavoriteProduct/createFavoriteProductController";
import { Router } from "express";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const createFavoriteProduct = new CreateFavoriteProductController();
const listProductsFavorites = new ListProductsFavoritesController();
usersRoutes.post("/", createUserController.handle);
usersRoutes.get(
  "/favorites-products",
  ensureAuthenticated,
  listProductsFavorites.handle
);

usersRoutes.post(
  "/favorites-products",
  ensureAuthenticated,
  createFavoriteProduct.handle
);

export { usersRoutes };
