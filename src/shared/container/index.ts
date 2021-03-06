import { ProductsRepository } from "@modules/products/infra/typeorm/repositories/ProductsRepository";
import { IProductsReposository } from "@modules/products/repositories/IProductsRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<IProductsReposository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
