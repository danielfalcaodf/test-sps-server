import { Request, Response } from "express";
import { UserService } from "../service/users.service";
import { AuthGuard } from "../../_middleware/auth.decorator";


export class UsersController {
  private readonly userService: UserService = new UserService()

  @AuthGuard()
  async getAll(req: Request, res: Response) {
    try {

      const users = await this.userService.findAll();

      res.status(201).json(users);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  @AuthGuard()
  async getById(req: Request, res: Response) {

    try {
      const { id } = req.params
      const user = await this.userService.findById(Number(id));

      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  @AuthGuard()
  async create(req: Request, res: Response) {
    try {

      const newUser = req.body;

      const user = await this.userService.createUser(newUser);

      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }

  }

  @AuthGuard()
  async delete(req: Request, res: Response) {

    try {
      const { id } = req.params;
      const user = await this.userService.deleteUser(Number(id));
      res.status(201).json({ mensagem: 'Delete ok' });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }

  }

  @AuthGuard()
  async update(req: Request, res: Response) {
    try {
      const userData = req.body
      const user = await this.userService.updateUser(userData);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }



}