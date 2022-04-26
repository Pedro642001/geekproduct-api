import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createProduct = container.resolve(CreateProductUseCase);

    const newProduct = await createProduct.execute({
      name,
      description,
    });

    return response.status(200).json(newProduct);
  }
}
