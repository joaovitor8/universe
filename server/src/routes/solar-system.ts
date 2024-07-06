import { FastifyInstance } from "fastify"
import axios from "axios"
import { planetas } from "../db"


export async function RouteApod(app: FastifyInstance) {
  app.get("/api/solar-system", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      const dateFromFrontend = request.query.date

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: process.env.CHAVE_NASA,
          date: dateFromFrontend,
          thumbs: true
        },
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (response.status === 200) {
        const data = response.data

        // tratamento dos dados
        delete data.service_version

        // Enviando os dados tratados para o front-end
        reply.send(data)
      } else {
        reply.status(response.status).send("Erro ao acessar a API da NASA")
      }
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })
}
