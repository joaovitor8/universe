import { FastifyInstance } from "fastify"
import axios from "axios"

export async function RouteEarth(app: FastifyInstance) {
  app.get("/api/earth/img", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      const aaa = request.query.date

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/planetary/earth/imagery", {
        params: {
          api_key: process.env.CHAVE_NASA,
          lon: 100.75,
          lat: 1.5,
          date: "2020-10-27"
        },
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (response.status === 200) {
        const data = response.data

        // tratamento dos dados
        //const processedData = data.map((dt) => ({}))

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