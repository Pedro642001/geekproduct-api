import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password invalid", 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password invalid", 401);
    }

    const token = jwt.sign({}, process.env.KEY_TOKEN, {
      subject: user._id.toHexString(),
      expiresIn: "3d",
    });

    const infoToken: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return infoToken;
  }
}
