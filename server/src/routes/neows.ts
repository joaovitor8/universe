import { FastifyInstance } from "fastify"
import axios from "axios"

export async function RouteNeoWs(app: FastifyInstance) {
  app.get("/api/neows/feed", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      const aaa = request.query.date

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/neo/rest/v1/feed", {
        params: {
          api_key: process.env.CHAVE_NASA,
          start_date: "2023-09-20",
          end_date: "2023-09-20",
        },
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (response.status === 200) {
        const data = response.data

        // Aqui você pode realizar qualquer tratamento necessário nos dados antes de enviá-los para o front-end

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
