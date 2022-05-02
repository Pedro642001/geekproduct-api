import { getMongoRepository, MongoRepository } from "typeorm";

import { AppError } from "../../../../../shared/errors/AppError";
import { Product } from "../../../../products/infra/typeorm/schemas/product";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../schemas/User";

export class UsersRepository implements IUsersRepository {
  private ormRepository: MongoRepository<User>;

  constructor() {
    this.ormRepository = getMongoRepository(User);
  }

  async create({
    name,
    email,
    password,
    favorites_products,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      password,
      favorites_products,
    });

    await this.ormRepository.save(user);

    return user;
  }
  async update({ _id, ...data }: User): Promise<void> {
    await this.ormRepository.update(_id, data);
  }
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });
    return user;
  }
  async findById(_id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(_id);
    return user;
  }
}
