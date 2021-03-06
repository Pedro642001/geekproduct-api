import { ProductsRepository } from "@modules/products/infra/typeorm/repositories/ProductsRepository";
import { Product } from "@modules/products/infra/typeorm/schemas/product";
import { inject, injectable } from "tsyringe";

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
