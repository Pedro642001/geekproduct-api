import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListFavoritesProductsUseCase } from "./listProductsFavoritesUseCase";

export class ListProductsFavoritesController {
  async handle(request: Request, response: Response) {
    const { id: user_id } = request.user;

    const FindListProductsFavorites = container.resolve(
      ListFavoritesProductsUseCase
    );
    const listProducts = await FindListProductsFavorites.execute(user_id);

    return response.status(201).json(listProducts);
  }
}
