import { ObjectID } from "typeorm";

export interface IUpdateProductDTO {
  id: ObjectID;
  name: string;
  description: string;
  image_url?: string;
}
