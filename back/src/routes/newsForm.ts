import { FastifyInstance } from "fastify"


export async function RouteNewsForm(app: FastifyInstance) {

  // Criar um usuário
  app.post('/db/news/user', async (request: any, reply: any) => {})

  // Pegar todos os usuários
  app.get('/db/news/users', async (request: any, reply: any) => {})

  // Pegar um usuário
  app.get('/db/news/users/:id', async (request: any, reply: any) => {})

  // Atualizar um usuário
  app.put('/db/news/users/:id', async (request: any, reply: any) => {})

  // Deletar um usuário
  app.delete('/db/news/users/:id', async (request: any, reply: any) => {})

}
