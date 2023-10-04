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
          sentry_object: dt.is_sentry_object,
          potentially_hazardous: dt.is_potentially_hazardous_asteroid,
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
        delete data.absolute_magnitude_h
        delete data.designation
        delete data.id
        delete data.is_potentially_hazardous_asteroid
        delete data.is_sentry_object
        delete data.name
        delete data.nasa_jpl_url
        delete data.neo_reference_id

        delete data.close_approach_data
        delete data.estimated_diameter
        delete data.links

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


// aphelion_distance: dt.orbital_data.aphelion_distance,
// ascending_node_longitude: dt.orbital_data.ascending_node_longitude,
// data_arc_in_days: dt.orbital_data.data_arc_in_days,
// eccentricity: dt.orbital_data.eccentricity,
// epoch_osculation: dt.orbital_data.epoch_osculation,
// equinox: dt.orbital_data.equinox,
// first_observation_date: dt.orbital_data.first_observation_date,
// inclination: dt.orbital_data.inclination,
// jupiter_tisserand_invariant: dt.orbital_data.jupiter_tisserand_invariant,
// last_observation_date: dt.orbital_data.last_observation_date,
// mean_anomaly: dt.orbital_data.mean_anomaly,
// mean_motion: dt.orbital_data.mean_motion,
// minimum_orbit_intersection: dt.orbital_data.minimum_orbit_intersection,
// observations_used: dt.orbital_data.observations_used,
// orbit_class_description: dt.orbital_data.orbit_class.orbit_class_description,
// orbit_class_range: dt.orbital_data.orbit_class.orbit_class_range,
// orbit_class_type: dt.orbital_data.orbit_class.orbit_class_type,
// orbit_determination_date: dt.orbital_data.orbit_determination_date,
// orbit_id: dt.orbital_data.orbit_id,
// orbit_uncertainty: dt.orbital_data.orbit_uncertainty,
// orbital_period: dt.orbital_data.orbital_period,
// perihelion_argument: dt.orbital_data.perihelion_argument,
// perihelion_distance: dt.orbital_data.perihelion_distance,
// perihelion_time: dt.orbital_data.perihelion_time,
// semi_major_axis: dt.orbital_data.semi_major_axis,