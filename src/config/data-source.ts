import "reflect-metadata";
import { DataSource } from "typeorm";
import { Livro } from "../entity/Livros";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Jump92485770!",
  database: "biblioteca",
  synchronize: true, // cria/atualiza tabelas automaticamente
  logging: false,
  entities: [Livro],
});
