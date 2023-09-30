import { FastifyInstance } from "fastify"
import axios from "axios"

export async function RouteNeoWs(app: FastifyInstance) {
  app.get("/api/neows/feed", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      const dateAsteroids = request.query.date

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/neo/rest/v1/feed", {
        params: {
          api_key: process.env.CHAVE_NASA,
          start_date: dateAsteroids,
          end_date: dateAsteroids,
        },
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (response.status === 200) {
        const data = response.data.near_earth_objects[dateAsteroids]

        // tratamento dos dados
        const processedData = data.map((dt) => ({
          id: dt.id,
          name: dt.name,
          absolute_magnitude: dt.absolute_magnitude_h,
          orbiting_body: dt.close_approach_data[0].orbiting_body,
          potentially_hazardous: dt.is_potentially_hazardous_asteroid,
          relative_velocity_km_h: dt.close_approach_data[0].relative_velocity.kilometers_per_hour,
          estimated_diameter_meters: dt.estimated_diameter.meters,
        }))

        // Enviando os dados tratados para o front-end
        reply.send(processedData)
      } else {
        reply.status(response.status).send("Erro ao acessar a API da NASA")
      }
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })

  app.get("/api/neows/lookup", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      const dateAsteroids = request.query.id

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${dateAsteroids}`, {
        params: {
          api_key: process.env.CHAVE_NASA,
        },
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (response.status === 200) {
        const data = response.data

        // tratamento dos dados
        delete data.links
        delete data.neo_reference_id
        delete data.designation
        delete data.nasa_jpl_url

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
