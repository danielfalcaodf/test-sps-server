import { Request, Response } from "express";
import { AuthService } from "../service/auth.service";

export class AuthController {

  private readonly authService = new AuthService
  async login(req: Request, res: Response) {
    try {

      const { email, password } = req.body;
      const data = await this.authService.login(email, password)
      res.status(200).json(data);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }

  }
  async register(req: Request, res: Response) {

    try {

      const newUser = req.body;
      const data = await this.authService.register(newUser);
      res.status(201).json(data);

    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}