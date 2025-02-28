import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config'
export function AuthGuard() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (req: Request, res: Response, next: NextFunction) {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
      }

      const token = authHeader.split(' ')[1];
      try {
        const decoded = jwt.verify(token, String(process.env.JWT_SECRET));
        (req as any).user = decoded;
        return originalMethod.apply(this, [req, res, next]);
      } catch (error) {
        return res.status(401).json({ message: 'Token inválido ou expirado.' });
      }
    };
  };
}
