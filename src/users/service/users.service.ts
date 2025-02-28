import { Users } from "../entity/users.entity";
import { UserRepository } from "../repository/users.repository";
export class UserService {

  private readonly userRepository = new UserRepository;

  async findAll() {
    return await this.userRepository.findAll()
  }
  async findById(id: number) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado")
    }
    return user;
  }
  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Usuário não encontrado")
    }
    return user;
  }

  async createUser(user: Users) {

    const verifyEmail = await this.userRepository.findByEmail(user.email);
    if (verifyEmail) {
      throw new Error("Já existe uma conta com esse Email");
    }

    return await this.userRepository.create(user);
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado")
    }

    return await this.userRepository.delete(id);
  }

  async updateUser(userData: Users) {
    const user = await this.userRepository.findById(userData.id);
    if (!user) {
      throw new Error("Usuário não encontrado")
    }

    return await this.userRepository.update(userData)


  }
}