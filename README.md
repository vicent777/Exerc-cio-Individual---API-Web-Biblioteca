# API Web Biblioteca 📚

API backend para gerenciamento de livros de uma biblioteca, implementando operações CRUD (Create, Read, Update, Delete) utilizando **Node.js**, **Express.js**, **TypeScript** e **TypeORM**.

A API permite criar, listar, buscar por ID, atualizar e remover livros do sistema.

A entidade **Livro** possui os seguintes campos: `id` (identificador único), `titulo` (string), `autor` (string), `isbn` (string único), `anoPublicacao` (number) e `disponivel` (boolean, padrão `true`).

Tecnologias utilizadas: Node.js, TypeScript, Express.js, TypeORM, MySQL, Git.

## Pré-requisitos

- Node.js >= 18
- MySQL
- npm ou yarn

## Instalação

Clone o repositório e instale as dependências, configure o banco e rode a aplicação:

```bash
git clone <URL_DO_REPOSITORIO>
cd nome-do-projeto
npm install
# ou yarn

Configure o banco de dados no arquivo src/config/data-source.ts:

import "reflect-metadata";
import { DataSource } from "typeorm";
import { Livro } from "../entity/Livros";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "SUA_SENHA_AQUI",
  database: "biblioteca",
  synchronize: true,
  logging: false,
  entities: [Livro],
});

Execute a aplicação:

npm run dev
# ou yarn dev

A API estará rodando em: http://localhost:3000/api
Endpoints
| Operação        | Método HTTP | Rota              | Descrição                     |
| --------------- | ----------- | ----------------- | ----------------------------- |
| Criar livro     | POST        | `/api/livros`     | Cadastra um novo livro        |
| Listar todos    | GET         | `/api/livros`     | Retorna todos os livros       |
| Buscar por ID   | GET         | `/api/livros/:id` | Retorna detalhes de um livro  |
| Atualizar livro | PUT/PATCH   | `/api/livros/:id` | Atualiza informações do livro |
| Remover livro   | DELETE      | `/api/livros/:id` | Remove um livro               |

Exemplo de request POST:
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "isbn": "9781234567897",
  "anoPublicacao": 1899,
  "disponivel": true
}

Estrutura do Projeto
src/
 ├─ config/
 │   └─ data-source.ts
 ├─ controller/
 │   └─ LivroController.ts
 ├─ entity/
 │   └─ Livros.ts
 ├─ repository/
 │   └─ LivroRepository.ts
 ├─ routes/
 │   └─ livro.routes.ts
 └─ server.ts

Observações

A API utiliza synchronize: true no TypeORM, então o banco será atualizado automaticamente conforme a entidade Livro.

Certifique-se de que a porta do MySQL e o usuário estão corretos no data-source.ts.
