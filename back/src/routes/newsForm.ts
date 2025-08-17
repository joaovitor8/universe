import { FastifyInstance } from "fastify"
import axios from "axios"


export async function RouteNewsForm(app: FastifyInstance) {

  // Criar um usuário
  app.post('/users', async (request: any, reply: any) => {

    const collection = fastify.mongo.db.collection('users')
    const { nomeCompleto, email, telefone, cpf, endereco } = request.body
    await collection.insertOne({
      nome: nomeCompleto,
      email: email,
      tel: telefone,
      cpf: cpf,
      end: endereco,
    })
    reply.send({ message: 'Usuário adicionado com sucesso' })
  })

  // Pegar todos os usuários
  app.get('/users', async (request: any, reply: any) => {
    const collection = fastify.mongo.db.collection('users')
    const users = await collection.find().toArray()
    reply.send(users)
  })

  // Pegar um usuário
  app.get('/users/:id', async (request: any, reply: any) => {
    const collection = fastify.mongo.db.collection('users') // Estou no DB de usuarios
    const id = request.params.id
    const user = await collection.findOne({ _id: new ObjectId(id) })
    console.log(user)
    if (!user) {
      reply.status(404).send({ message: 'Usuário não encontrado' })
    } else {
      reply.send(user)
    }
  })

  // Atualizar um usuário
  app.put('/users/:id', async (request: any, reply: any) => {
    const collection = fastify.mongo.db.collection('users')
    const id = request.params.id
    const updatedUser = request.body
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedUser })
    if (result.modifiedCount === 0) {
      reply.status(404).send({ message: 'Usuário não encontrado' })
    } else {
      reply.send(updatedUser, { message: 'Usuário atualizado com sucesso' })
    }
  })

  // Deletar um usuário
  app.delete('/users/:id', async (request: any, reply: any) => {
    const collection = fastify.mongo.db.collection('users')
    const id = request.params.id
    const result = await collection.findOneAndDelete({ _id: new ObjectId(id) })
    if (!result.value) {
      reply.status(404).send({ message: 'Usuário não encontrado' })
    } else {
      reply.send(result.value, { message: 'Usuário deletado com sucesso' })
    }
  })

}
