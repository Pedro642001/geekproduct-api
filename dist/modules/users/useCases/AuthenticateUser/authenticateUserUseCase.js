"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateUserUseCase = void 0;

var _UsersRepository = require("../../../../../dist/modules/users/infra/typeorm/repositories/UsersRepository");

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _tsyringe = require("tsyringe");

var _AppError = require("../../../../../dist/shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AuthenticateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _UsersRepository.UsersRepository === "undefined" ? Object : _UsersRepository.UsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class AuthenticateUserUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    email,
    password
  }) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.AppError("Email or password invalid", 401);
    }

    const passwordMatch = await (0, _bcryptjs.compare)(password, user.password);

    if (!passwordMatch) {
      throw new _AppError.AppError("Email or password invalid", 401);
    }

    const token = _jsonwebtoken.default.sign({}, "09da5a9ff2dbbfd1273248fee0ae1b71", {
      subject: String(user.id),
      expiresIn: "3d"
    });

    const infoToken = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    };
    return infoToken;
  }

}) || _class) || _class) || _class) || _class);
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;