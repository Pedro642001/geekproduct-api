import { inject, injectable } from "tsyringe";

import { ICreateProductDTO } from "../../dtos/createProductDTO";
import { Product } from "../../infra/typeorm/schemas/product";
import { IProductsReposository } from "../../repositories/IProductsRepository";

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsReposository
  ) {}
  async execute({ name, description }: ICreateProductDTO): Promise<Product> {
    const newProduct = await this.productsRepository.create({
      name,
      description,
    });

    return newProduct;
  }
}
