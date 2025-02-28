import { DataSource, createConnection } from "typeorm";

import { AppDataSource } from "./_config/data-source";
import { Users } from "./users/entity/users.entity";

export async function startDatabase() {

  const connection = await AppDataSource.initialize();

  console.log("Conexão com o banco de dados estabelecida.");


  await connection.runMigrations();
  console.log("Migrations rodadas.");


  await createUserAdmin(connection)
  console.log("Seeds rodados.");

}

async function createUserAdmin(connection: DataSource) {

  const userRepository = connection.getRepository(Users);
  const existingUser = await userRepository.findOne({ where: { email: "admin@spsgroup.com.br" } });

  if (existingUser) {
    console.log("Usuário admin já criado!");
    return
  }
  const userData = { name: "admin", email: "admin@spsgroup.com.br", type: "admin", password: "1234" } as Users;
  const user = userRepository.create(userData)
  await userRepository.save(user);

  console.log("Usuário seed criado!");
}

