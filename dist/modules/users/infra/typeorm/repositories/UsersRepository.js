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
    name,
    email,
    password,
    favorites_products
  }) {
    const user = this.ormRepository.create({
      name,
      email,
      password,
      favorites_products
    });
    await this.ormRepository.save(user);
    return user;
  }

  async update({
    _id,
    ...data
  }) {
    await this.ormRepository.update(_id, data);
  }

  async findByEmail(email) {
    const user = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return user;
  }

  async findById(_id) {
    const user = await this.ormRepository.findOne(_id);
    return user;
  }

}

exports.UsersRepository = UsersRepository;