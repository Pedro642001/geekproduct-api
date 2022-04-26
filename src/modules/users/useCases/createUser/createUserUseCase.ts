import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, email, password }: ICreateUserDTO) {
    const verifyUserExists = await this.usersRepository.findByEmail(email);

    if (verifyUserExists) {
      throw new AppError("user already exist");
    }
    const passwordHashed = await hash(password, 8);

    const newUser = await this.usersRepository.create({
      name,
      email,
      password: passwordHashed,
    });

    return newUser;
  }
}
