"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepository = void 0;

var _typeorm = require("typeorm");

var _User = require("../schemas/User");

class UsersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getMongoRepository)(_User.User);
  }

  async create({
    id,
    name,
    email,
    password,
    favorites_products
  }) {
    const user = this.ormRepository.create({
      id,
      name,
      email,
      password,
      favorites_products
    });
    await this.ormRepository.save(user);
    return user;
  }

  async update({
    id,
    ...data
  }) {
    await this.ormRepository.update(id, data);
  }

  async findByEmail(email) {
    const user = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return user;
  }

  async findById(id) {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

}

exports.UsersRepository = UsersRepository;