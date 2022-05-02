import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListFavoritesProductsUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}
  async execute(user_id: string) {
    const user = await this.usersRepository.findById(user_id);
    if (!user.favorites_products) {
      return [];
    }
    const produts_favorites_ids = user.favorites_products.map((product) => {
      return product._id;
    });
    return produts_favorites_ids;
  }
}
