import { FastifyInstance } from "fastify"
import sqlite3 from 'sqlite3'


export async function RouteNewsForm(app: FastifyInstance, db: sqlite3.Database) {

  // Criar um usuário
  app.post('/db/news/user', async (request: any, reply: any) => {
    const { nome, email } = request.body;
    db.run(
      'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
      [nome, email],
      function (err) {
        if (err) {
          reply.code(500).send({ error: 'Erro ao criar usuário', details: err.message });
        } else {
          reply.code(201).send({ message: 'Usuário criado com sucesso', id: this.lastID });
        }
      }
    );
  })

  // Pegar todos os usuários
  app.get('/db/news/users', async (request: any, reply: any) => {})

  // Pegar um usuário
  app.get('/db/news/users/:id', async (request: any, reply: any) => {})

  // Atualizar um usuário
  app.put('/db/news/users/:id', async (request: any, reply: any) => {})

  // Deletar um usuário
  app.delete('/db/news/users/:id', async (request: any, reply: any) => {})

}
