import { FastifyInstance } from "fastify"
import axios from "axios"

export async function RouteDonki(app: FastifyInstance) {
  app.get("/api/donki/cme", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/CME", {
        params: {
          api_key: process.env.CHAVE_NASA,
          startDate: aaa,
          endDate: aaa,
        },
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (response.status === 200) {
        const data = response.data

        // tratamento dos dados

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