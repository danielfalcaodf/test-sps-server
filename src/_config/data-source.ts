import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "../users/entity/users.entity";
import 'dotenv/config'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: String(process.env.POSTGRES_HOST),
  port: Number(process.env.POSTGRES_PORT),
  username: String(process.env.POSTGRES_USER),
  password: String(process.env.POSTGRES_PASSWORD),
  database: String(process.env.POSTGRES_DATABASE),
  synchronize: true,
  logging: false,
  entities: [Users],
  migrations: ["./src/_migrations/*.ts"],
  subscribers: [],

});

export const typeormConfig = {
  type: "postgres",
  host: String(process.env.POSTGRES_HOST),
  port: Number(process.env.POSTGRES_PORT),
  username: String(process.env.POSTGRES_USER),
  password: String(process.env.POSTGRES_PASSWORD),
  database: String(process.env.POSTGRES_DATABASE),
  synchronize: true,
  logging: false,
  entities: [Users],
  migrations: ["./src/_migrations/*.ts"],
  subscribers: [],

}


