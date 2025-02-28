# API Teste SPS

Esta é uma API para autenticação e gerenciamento de usuários.

## Sumário

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar a aplicação](#como-rodar-a-aplicação)
  - [Executando com Docker](#executando-com-docker)
  - [Executando de forma nativa](#executando-de-forma-nativa)
- [Endpoints](#endpoints)
  - [Auth](#auth)
  - [Users](#users)
- [Comandos úteis](#comandos-úteis)

---
## Tecnologias utilizadas

- **Node.js** com **TypeScript** versão **v18.18**
- **Express** para criação da API
- **TypeORM** para gerenciamento do banco de dados
- **Docker** para containerização
- **Migrations e Seeds** para estruturação do banco de dados

---

## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL](https://www.postgresql.org/) (caso rode sem Docker)

---

## Como rodar a aplicação

### Executando com Docker

1. **Clone o repositório**  
   ```sh
   git clone git@github.com:danielfalcaodf/test-sps-server.git
   cd test-sps-serve
   ```

2. **Crie e inicie os containers**  
   ```sh
   docker-compose up -d
   ```

3. **Acesse os logs (opcional)**  
   ```sh
   docker-compose logs -f
   ```

4. **Executar as migrations e seeds no container**  
  Automaticamente a API já executar as migrations e seeds, mas ser precisar segue o comando
   ```sh
   docker exec -it api-teste-sps npm run migration:run
   docker exec -it api-teste-sps npm run seed:run
   ```

5. **A API estará rodando em:**  
   ```
   http://localhost:3001
   ```

---

### Executando de forma nativa

1. **Clone o repositório**  
   ```sh
   git clone git@github.com:danielfalcaodf/test-sps-server.git
   cd test-sps-server
   ```

2. **Instale as dependências**  
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente**  
   Preencher as informações do banco de dados no arquivo `.env` .

4. **Rodar as migrations**  
   ```sh
   npm run migration:run
   ```

5. **Rodar os seeds**  
   ```sh
   npm run seed:run
   ```

6. **Iniciar a aplicação em modo desenvolvimento**  
   ```sh
   npm run dev
   ```

7. **Iniciar a aplicação em modo produção**  
   ```sh
   npm run build
   npm start
   ```

---

## Endpoints

### **Auth**
| Método | Rota | Descrição |
|--------|------|----------|
| `POST` | `/api/auth/login` | Realiza login de um usuário |
| `POST` | `/api/auth/register` | Registra um novo usuário |

### **Users**
| Método | Rota | Descrição |
|--------|------|----------|
| `GET` | `/api/users` | Retorna todos os usuários |
| `POST` | `/api/users` | Cria um novo usuário |
| `PUT` | `/api/users` | Atualiza um usuário |
| `GET` | `/api/users/{id}` | Retorna um usuário pelo ID |
| `DELETE` | `/api/users/{id}` | Remove um usuário pelo ID |

---

## Comandos úteis

| Comando | Descrição |
|---------|----------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento |
| `npm run build` | Compila o código TypeScript para JavaScript |
| `npm start` | Inicia a aplicação em produção |
| `npm run migration:generate --name NomeDaMigration` | Gera uma nova migration |
| `npm run migration:run` | Executa as migrations pendentes |
| `npm run migration:revert` | Reverte a última migration |
| `npm run seed:run` | Executa os seeds de dados |

---

