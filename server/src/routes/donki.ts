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

  app.get("/api/donki/cmea", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/CMEAnalysis", {
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

  app.get("/api/donki/gst", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/GST", {
        params: {
          api_key: process.env.CHAVE_NASA,
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

  app.get("/api/donki/ips", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/IPS", {
        params: {
          api_key: process.env.CHAVE_NASA,
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

  app.get("/api/donki/flr", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/FLR", {
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

  app.get("/api/donki/sep", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/SEP", {
        params: {
          api_key: process.env.CHAVE_NASA,
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

  app.get("/api/donki/mpc", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/MPC", {
        params: {
          api_key: process.env.CHAVE_NASA,
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

  app.get("/api/donki/rbe", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/RBE", {
        params: {
          api_key: process.env.CHAVE_NASA,
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

  app.get("/api/donki/hss", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/HSS", {
        params: {
          api_key: process.env.CHAVE_NASA,
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

  app.get("/api/donki/wsa", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/WSAEnlilSimulations", {
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

  app.get("/api/donki/notf", async (request: any, reply) => {
    try {
      // Acessando dados enviados como parâmetros de consulta
      // const  = request.query.date
      const aaa = "2023-09-20"

      // Fazendo a solicitação para a API da NASA
      const response = await axios.get("https://api.nasa.gov/DONKI/notifications", {
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
