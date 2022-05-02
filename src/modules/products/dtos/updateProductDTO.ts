import { ObjectID } from "typeorm";

export interface IUpdateProductDTO {
  _id: ObjectID;
  name: string;
  description: string;
  image_url?: string;
}
