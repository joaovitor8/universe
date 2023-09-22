import { FastifyInstance } from "fastify"
import axios from "axios"

export async function RouteApod(app: FastifyInstance) {
  app.get("/api/apod", async (request, reply) => {
    try {
      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: process.env.CHAVE_NASA
        },
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (response.status === 200) {
        const data = response.data

        // Aqui você pode realizar qualquer tratamento necessário nos dados antes de enviá-los para o front-end
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


  app.get("/api/apod-gallery", async (request, reply) => {
    try {
      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: process.env.CHAVE_NASA,
          count: 21

          //date: "2023-09-20",
          //start_date: "2023-09-20",
          //end_date: "2023-09-01",
          //thumbs: true
        },
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (response.status === 200) {
        const data = response.data

        // Aqui você pode realizar qualquer tratamento necessário nos dados antes de enviá-los para o front-end
        delete data[0].service_version

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
