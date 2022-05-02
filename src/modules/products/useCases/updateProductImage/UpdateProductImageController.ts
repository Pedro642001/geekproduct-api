import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { UpdateProductImageUseCase } from "./UpdateProductImageUseCase";

export class UpdateProductImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;
    const imageFile = request.file.filename;

    if (!imageFile) {
      throw new AppError("image not found!");
    }

    const updateProductImage = container.resolve(UpdateProductImageUseCase);

    const productUpdated = updateProductImage.execute({
      product_id: id,
      imageFile,
    });

    return response.status(204).json(productUpdated);
  }
}
