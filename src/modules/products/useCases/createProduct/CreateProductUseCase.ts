import { ICreateProductDTO } from "@modules/products/dtos/createProductDTO";
import { Product } from "@modules/products/infra/typeorm/schemas/product";
import { IProductsReposository } from "@modules/products/repositories/IProductsRepository";
import { inject, injectable } from "tsyringe";

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
