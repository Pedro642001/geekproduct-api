import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateFavoriteProductUseCase } from "./createFavoriteProductUseCase";

export class CreateFavoriteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { products_ids } = request.body;
    const { id: user_id } = request.user;

    const createfavoriteProduct = container.resolve(
      CreateFavoriteProductUseCase
    );
    await createfavoriteProduct.execute({ products_ids, user_id });

    return response.status(201).send();
  }
}
