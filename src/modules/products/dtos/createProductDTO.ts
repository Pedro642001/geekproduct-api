import { ObjectID } from "typeorm";

export interface ICreateProductDTO {
  _id?: ObjectID;
  name: string;
  description: string;
  image_url?: string;
}
