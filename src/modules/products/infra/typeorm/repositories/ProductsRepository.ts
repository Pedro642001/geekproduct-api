import { ICreateProductDTO } from "modules/products/dtos/createProductDTO";
import { IUpdateProductDTO } from "modules/products/dtos/updateProductDTO";
import { IProductsReposository } from "modules/products/repositories/IProductsRepository";
import { getMongoRepository, MongoRepository, ObjectID } from "typeorm";

import { Product } from "../schemas/product";

export class ProductsRepository implements IProductsReposository {
  private ormRepository: MongoRepository<Product>;

  constructor() {
    this.ormRepository = getMongoRepository(Product);
  }

  async create({
    name,
    description,
    image_url,
  }: ICreateProductDTO): Promise<Product> {
    const newProduct = this.ormRepository.create({
      name,
      description,
      image_url,
    });

    await this.ormRepository.save(newProduct);

    return newProduct;
  }
  async update({
    id,
    description,
    name,
    image_url,
  }: IUpdateProductDTO): Promise<void> {
    await this.ormRepository.update(id, { description, name, image_url });
  }
  async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);

    return product;
  }
  async findAll(): Promise<Product[]> {
    const product = await this.ormRepository.find();

    return product;
  }
  async findByIds(ids_products: string[]): Promise<Product[]> {
    const products = await this.ormRepository.findByIds(ids_products);
    return products;
  }
}
