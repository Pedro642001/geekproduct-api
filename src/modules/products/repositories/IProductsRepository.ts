import { ICreateProductDTO } from "../dtos/createProductDTO";
import { Product } from "../infra/typeorm/schemas/product";

export interface IProductsReposository {
  create(data: ICreateProductDTO): Promise<Product>;
  update(data: ICreateProductDTO): Promise<void>;
  findById(product_id: string): Promise<Product | undefined>;
  findAll(): Promise<Product[]>;
  findByIds(ids_products: Array<string>): Promise<Product[]>;
}
