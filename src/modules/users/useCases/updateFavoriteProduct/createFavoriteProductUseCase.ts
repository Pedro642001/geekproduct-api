import { Product } from "modules/products/infra/typeorm/schemas/product";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ProductsRepository } from "../../../products/infra/typeorm/repositories/ProductsRepository";
import { ICreateFavoriteProductDTO } from "../../dtos/ICreateProductFavoriteDTO";
import { UsersRepository } from "../../infra/typeorm/repositories/UsersRepository";

@injectable()
export class CreateFavoriteProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: ProductsRepository,
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}
  async execute({
    products_ids,
    user_id,
  }: ICreateFavoriteProductDTO): Promise<void> {
    const favoritesProducts = await this.productsRepository.findByIds(
      products_ids
    );
    let user = await this.usersRepository.findById(user_id);

    if (!favoritesProducts) {
      throw new AppError("Products not found");
    }

    if (!user) {
      throw new AppError("User not found");
    }

    user.favorites_products = favoritesProducts;
    console.log(favoritesProducts);
    console.log(user.favorites_products);

    await this.usersRepository.update(user);
  }
}
