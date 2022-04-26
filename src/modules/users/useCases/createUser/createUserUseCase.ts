import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

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
