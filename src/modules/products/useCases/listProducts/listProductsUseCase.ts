import { inject, injectable } from "tsyringe";

import { ProductsRepository } from "../../infra/typeorm/repositories/ProductsRepository";
import { Product } from "../../infra/typeorm/schemas/product";

@injectable()
export class ListProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: ProductsRepository
  ) {}
  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.findAll();

    return products;
  }
}
