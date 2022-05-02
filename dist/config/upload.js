"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = require("crypto");

var _multer = _interopRequireDefault(require("multer"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tmpFolder = (0, _path.resolve)(__dirname, "..", "..", "tmp/productImage");
var _default = {
  tmpFolder,
  storage: _multer.default.diskStorage({
    destination: (0, _path.resolve)(__dirname, "..", "..", "tmp/productImage"),
    filename: (request, file, callback) => {
      const fileHash = (0, _crypto.randomBytes)(16).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;
      return callback(null, fileName);
    }
  })
};
exports.default = _default;