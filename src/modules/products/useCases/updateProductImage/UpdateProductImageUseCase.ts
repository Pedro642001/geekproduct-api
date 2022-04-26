import { IProductsReposository } from "@modules/products/repositories/IProductsRepository";
import { deleteFile } from "@utils/file";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  product_id: string;
  imageFile: string;
}

@injectable()
export class UpdateProductImageUseCase {
  constructor(
    @inject("ProductsRepository")
    private productRepository: IProductsReposository
  ) {}
  async execute({ product_id, imageFile }: IRequest) {
    const product = await this.productRepository.findById(product_id);

    if (!product) {
      throw new AppError("Product not found");
    }

    if (product.image_url) {
      await deleteFile(`./tmp/productImage/${product.image_url}`);
    }

    product.image_url = imageFile;

    await this.productRepository.update(product);
  }
}
