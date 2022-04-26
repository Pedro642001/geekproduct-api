import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserUseCase);

    const authenticateInfo = await authenticateUser.execute({
      email,
      password,
    });

    return response.status(201).json(authenticateInfo);
  }
}
