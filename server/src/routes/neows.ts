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

        const processedData = {
          estimated_diameter: {
           feet: {
            max: data.estimated_diameter.feet.estimated_diameter_max,
            min: data.estimated_diameter.feet.estimated_diameter_min,
           },
           kilometers: {
            max: data.estimated_diameter.kilometers.estimated_diameter_max,
            min: data.estimated_diameter.kilometers.estimated_diameter_min,
           },
           meters: {
            max: data.estimated_diameter.meters.estimated_diameter_max,
            min: data.estimated_diameter.meters.estimated_diameter_min,
           },
           miles: {
            max: data.estimated_diameter.miles.estimated_diameter_max,
            min: data.estimated_diameter.miles.estimated_diameter_min,
           },
          },

          orbital_data: {
            equinox: data.orbital_data.equinox,
            observation_date: `${data.orbital_data.first_observation_date} to ${data.orbital_data.last_observation_date}`,
            aphelion_distance: `≅${Number(data.orbital_data.aphelion_distance).toFixed(2)} AU`,
            perihelion_distance: `≅${Number(data.orbital_data.perihelion_distance).toFixed(2)}`,
            semi_major_axis: `≅${Number(data.orbital_data.semi_major_axis).toFixed(2)} AU`,
            mean_anomaly: `≅${Number(data.orbital_data.mean_anomaly).toFixed(2)}°`,
            mean_motion: `≅${Number(data.orbital_data.mean_motion).toFixed(2)}°/day`,
            ascending_node_longitude: `≅${Number(data.orbital_data.ascending_node_longitude).toFixed(2)}°`,
            inclination: `≅${Number(data.orbital_data.inclination).toFixed(2)}°`,
            perihelion_argument: `≅${Number(data.orbital_data.perihelion_argument).toFixed(2)}°`,
            eccentricity: `≅${Number(data.orbital_data.eccentricity).toFixed(2)}`,
            observations_used: data.orbital_data.observations_used,
            epoch_osculation: `≅${Number(data.orbital_data.epoch_osculation).toFixed(2)} J.D`,
            minimum_orbit_intersection: `≅${Number(data.orbital_data.minimum_orbit_intersection).toFixed(2)}`,
            perihelion_time: `≅${Number(data.orbital_data.perihelion_time).toFixed(2)} J.D.`,
            orbital_period: `≅${Number(data.orbital_data.orbital_period).toFixed(2)} days`,
            jupiter_tisserand_invariant: `≅${Number(data.orbital_data.jupiter_tisserand_invariant).toFixed(2)}`,
            orbit_class_description: data.orbital_data.orbit_class.orbit_class_description,
            orbit_class_range: data.orbital_data.orbit_class.orbit_class_range,
            orbit_class_type: data.orbital_data.orbit_class.orbit_class_type,
            orbit_determination_date: data.orbital_data.orbit_determination_date,
            orbit_id: data.orbital_data.orbit_id,
            orbit_uncertainty: data.orbital_data.orbit_uncertainty,
          },
        }

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
}
