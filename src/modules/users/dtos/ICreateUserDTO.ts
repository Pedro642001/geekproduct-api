import { Product } from "modules/products/infra/typeorm/schemas/product";
import { ObjectID } from "typeorm";

export interface ICreateUserDTO {
  _id?: ObjectID;
  name: string;
  email: string;
  password: string;
  favorites_products?: Array<Product>;
}
