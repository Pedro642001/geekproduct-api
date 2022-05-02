import { randomBytes } from "crypto";
import multer from "multer";
import { resolve } from "path";

const tmpFolder = resolve(__dirname, "..", "..", "tmp/productImage");

export default {
  tmpFolder,
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "tmp/productImage"),
    filename: (request, file, callback) => {
      const fileHash = randomBytes(16).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
