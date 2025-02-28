import { compareSync } from "bcrypt";
import { UserService } from "../../users/service/users.service";
import { Users } from "../../users/entity/users.entity";
import jwt from 'jsonwebtoken';
import 'dotenv/config'
import { TypeUser } from "../../users/enum/type-user.enum";
export class AuthService {

  private userService = new UserService
  async login(email: string, password: string) {

    const user = await this.userService.findByEmail(email)

    const validPassword = compareSync(password, user.password);

    if (!validPassword) {
      throw new Error('Invalid password.')
    }
    user.password = "";
    return this.generateJwt(user)


  }

  async register(newUser: Users) {
    newUser.type = TypeUser.USER;
    const user = await this.userService.createUser(newUser);
    user.password = "";

    return this.generateJwt(user);
  }
  private generateJwt(user: Users) {
    const payload = {
      email: user.email,
      sub: user.id,
      username: user.name,
      type: user.type,

    }

    const data = {
      token: jwt.sign(payload, String(process.env.JWT_SECRET), { expiresIn: '24h' }),
      user
    }
    return data
  }
}