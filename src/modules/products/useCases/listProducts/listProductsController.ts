import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductsUseCase } from "./listProductsUseCase";

export class ListProductsController {
  async handle(request: Request, response: Response) {
    const listProducts = container.resolve(ListProductsUseCase);
    const products = await listProducts.execute();

    return response.status(201).json(products);
  }
}
