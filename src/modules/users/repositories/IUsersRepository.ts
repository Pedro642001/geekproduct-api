import { Product } from "../../products/infra/typeorm/schemas/product";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/schemas/User";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  update(data: User): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}
