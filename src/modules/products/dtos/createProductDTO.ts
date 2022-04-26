import { ObjectID } from "typeorm";

export interface ICreateProductDTO {
  id?: ObjectID;
  name: string;
  description: string;
  image_url?: string;
}
