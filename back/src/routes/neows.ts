import { FastifyInstance } from "fastify"
import axios from "axios"

// Meteoros

export async function RouteNeoWs(app: FastifyInstance) {
  app.get("/api/neows/feed", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      const dateAsteroids = request.query.date

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/neo/rest/v1/feed", {
        params: {
          api_key: process.env.KEY_NASA,
          start_date: dateAsteroids,
          end_date: dateAsteroids,
        },
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (response.status === 200) {
        const data = response.data.near_earth_objects[dateAsteroids]

        // tratamento dos dados
        const processedData = data.map((dt) => ({
          id: dt.id,   // ID do asteroide
          name: dt.name,   // Nome do asteroide
          absolute_magnitude_h: `${Number(dt.absolute_magnitude_h).toFixed(2)}`,   // Magnitude absoluta do asteroide
          is_potentially_hazardous_asteroid: dt.is_potentially_hazardous_asteroid,   // Indica se o asteroide é potencialmente perigoso
          is_sentry_object: dt.is_sentry_object,   // Indica se o asteroide é um objeto Sentry
          nasa_jpl_url: dt.nasa_jpl_url,   // URL do JPL da NASA para o asteroide
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

  // --------------------------------------------------


  app.get("/api/neows/lookup", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      //const idAsteroids = request.query.id
      const idAsteroids = "2314079"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${idAsteroids}`, {
        params: {
          api_key: process.env.KEY_NASA,
        },
      })

      // Verifica se a resposta da API foi bem-sucedida
      if (response.status === 200) {
        const data = response.data

        const processedData = {
          id: data.id,   // ID do asteroide
          nome: data.name,   // Nome do asteroide
          nasa_jpl_url: data.nasa_jpl_url,   // URL do JPL da NASA para o asteroide
          absolute_magnitude_h: data.absolute_magnitude_h,   // Magnitude absoluta do asteroide  
          is_potentially_hazardous_asteroid: data.is_potentially_hazardous_asteroid,   // Indica se o asteroide é potencialmente perigoso
          is_sentry_object: data.is_sentry_object,   // Indica se o asteroide é um objeto Sentry

          close_approach_data: data.close_approach_data.map((e) => ({
            close_approach_date: e.close_approach_date,   // Data de aproximação do asteroide
            close_approach_date_full: e.close_approach_date_full,    // Data completa de aproximação do asteroide
            orbiting_body: e.orbiting_body,   // Corpo celeste em órbita do asteroide
            epoch_date_close_approach: e.epoch_date_close_approach,   // Data do epoch de aproximação do asteroide
            relative_velocity: {
              kilometers_second: `≅${Math.floor(e.relative_velocity.kilometers_per_second)} km/s`,   // Velocidade relativa em km/s
              kilometers_hour: `≅${Math.floor(e.relative_velocity.kilometers_per_hour)} km/h`,   // Velocidade relativa em km/h
              miles_hour: `≅${Math.floor(e.relative_velocity.miles_per_hour)} mi/h`,   // Velocidade relativa em mi/h
            },
            miss_distance: {
              astronomical: `≅${Number(e.miss_distance.astronomical).toFixed(3)} AU`,   // Distância de aproximação em unidades astronômicas
              lunar: `≅${Math.floor(e.miss_distance.lunar)} LU`,   // Distância de aproximação em unidades lunares
              kilometers: `≅${Math.floor(e.miss_distance.kilometers)} km`,   // Distância de aproximação em quilômetros
              miles: `≅${Math.floor(e.miss_distance.miles)} m`,   // Distância de aproximação em milhas
            },
          })),

          estimated_diameter: {
            miles: `≅${Number(data.estimated_diameter.miles.estimated_diameter_min).toFixed(3)} to ≅${Number(data.estimated_diameter.miles.estimated_diameter_max).toFixed(3)} mi`,   // Diâmetro estimado em milhas
            kilometers: `≅${Number(data.estimated_diameter.kilometers.estimated_diameter_min).toFixed(3)} to ≅${Number(data.estimated_diameter.kilometers.estimated_diameter_max).toFixed(3)} km`,   // Diâmetro estimado em quilômetros
            meters: `≅${Math.floor(data.estimated_diameter.meters.estimated_diameter_min)} to ≅${Math.floor(data.estimated_diameter.meters.estimated_diameter_max)} m`,   // Diâmetro estimado em metros
            feet: `≅${Math.floor(data.estimated_diameter.feet.estimated_diameter_min)} to ≅${Math.floor(data.estimated_diameter.feet.estimated_diameter_max)} ft`,   // Diâmetro estimado em pés
          },

          orbital_data: {
            orbit_id: data.orbital_data.orbit_id,   // ID da órbita do asteroide 
            orbit_determination_date: data.orbital_data.orbit_determination_date,   // Data de determinação da órbita do asteroide
            observation_date: `${data.orbital_data.first_observation_date} to ${data.orbital_data.last_observation_date}`,   // Data de observação do asteroide
            data_arc_in_days: data.orbital_data.data_arc_in_days,   // Arco de dados em dias
            observations_used: data.orbital_data.observations_used,   // Observações utilizadas
            orbit_uncertainty: data.orbital_data.orbit_uncertainty,   // Incerteza da órbita
            minimum_orbit_intersection: `≅${Number(data.orbital_data.minimum_orbit_intersection).toFixed(2)}`,   // Interseção mínima da órbita 
            jupiter_tisserand_invariant: `≅${Number(data.orbital_data.jupiter_tisserand_invariant).toFixed(2)}`,   // Invariante de Tisserand de Júpiter
            epoch_osculation: `≅${Number(data.orbital_data.epoch_osculation).toFixed(2)} J.D`,   // Osculação do epoch
            eccentricity: `≅${Number(data.orbital_data.eccentricity).toFixed(2)}`,   // Excentricidade da órbita
            semi_major_axis: `≅${Number(data.orbital_data.semi_major_axis).toFixed(2)} AU`,   // Eixo semi-maior da órbita
            inclination: `≅${Number(data.orbital_data.inclination).toFixed(2)}°`,   // Inclinação da órbita
            ascending_node_longitude: `≅${Number(data.orbital_data.ascending_node_longitude).toFixed(2)}°`,   // Longitude do nó ascendente da órbita
            orbital_period: `≅${Math.floor(data.orbital_data.orbital_period)} days`,   // Período orbital em dias
            perihelion_distance: `≅${Number(data.orbital_data.perihelion_distance).toFixed(2)}`,   // Distância do periélio
            perihelion_argument: `≅${Number(data.orbital_data.perihelion_argument).toFixed(2)}°`,   // Argumento do periélio
            aphelion_distance: `≅${Number(data.orbital_data.aphelion_distance).toFixed(2)} AU`,   // Distância do afélio
            perihelion_time: `≅${Number(data.orbital_data.perihelion_time).toFixed(2)} J.D.`,   // Tempo do periélio
            mean_anomaly: `≅${Number(data.orbital_data.mean_anomaly).toFixed(2)}°`,   // Anomalia média
            mean_motion: `≅${Number(data.orbital_data.mean_motion).toFixed(2)}°/day`,   // Movimento médio
            equinox: data.orbital_data.equinox,   // Equinócio
            orbit_class_type: data.orbital_data.orbit_class.orbit_class_type,   // Tipo de classe orbital
            orbit_class_description: data.orbital_data.orbit_class.orbit_class_description,   // Descrição da classe orbital
            orbit_class_range: data.orbital_data.orbit_class.orbit_class_range,   // Faixa da classe orbital
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
