import { FastifyInstance } from "fastify"


export async function RouteApod(app: FastifyInstance) {
  app.get("/api/solar-system", async (request: any, reply) => {
    try {
      // const dateFromFrontend = request.query.date

      const data = []

      reply.send(data)
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })
}
