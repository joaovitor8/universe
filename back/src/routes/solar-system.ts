import { FastifyInstance } from "fastify"
import { readFile } from "fs/promises"

export async function RouteSolarSystem(app: FastifyInstance) {
  app.get("/api/solar-system", async (request: any, reply) => {
    try {

      const data = await readFile("./src/DB/db_sistema-solar PT-BR.json", "utf-8");
      const jsonData = JSON.parse(data);

      reply.send()
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })
}
