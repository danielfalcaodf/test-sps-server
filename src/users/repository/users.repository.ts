import { AppDataSource } from "../../_config/data-source";
import { Users } from "../entity/users.entity";

export class UserRepository {

  private userRepository = AppDataSource.getRepository(Users);

  async findAll() {
    return await this.userRepository.find();
  }
  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }
  async findById(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }
  async create(userData: Users) {
    const user = this.userRepository.create(userData)
    return await this.userRepository.save(user);
  }

  async delete(id: number) {
    return await this.userRepository.delete({ id: id })
  }

  async update(userData: Users) {
    const user = this.userRepository.create(userData)
    return await this.userRepository.update({ id: user.id }, user);
  }
}