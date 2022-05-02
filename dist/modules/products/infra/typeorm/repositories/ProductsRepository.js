"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsRepository = void 0;

var _typeorm = require("typeorm");

var _product = require("../schemas/product");

class ProductsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getMongoRepository)(_product.Product);
  }

  async create({
    name,
    description,
    image_url
  }) {
    const newProduct = this.ormRepository.create({
      name,
      description,
      image_url
    });
    await this.ormRepository.save(newProduct);
    return newProduct;
  }

  async update({
    _id,
    description,
    name,
    image_url
  }) {
    await this.ormRepository.update(_id, {
      description,
      name,
      image_url
    });
  }

  async findById(_id) {
    const product = await this.ormRepository.findOne(_id);
    return product;
  }

  async findAll() {
    const product = await this.ormRepository.find();
    return product;
  }

  async findByIds(ids_products) {
    const products = await this.ormRepository.findByIds(ids_products);
    return products;
  }

}

exports.ProductsRepository = ProductsRepository;