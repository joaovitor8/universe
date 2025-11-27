import { FastifyInstance } from "fastify";
import { readFile } from "fs/promises";


export async function RouteSolarSystem(app: FastifyInstance) {
  app.get("/api/solar-system", async (request: any, reply) => {
    try {
      const response = await readFile("./src/midia/db_sistema-solar.json", "utf-8");
      const jsonData = JSON.parse(response).planets;

      reply.send(jsonData)
    } catch (error) {
      console.error("Erro ao ler dados do sistema solar:", error)
      reply.status(500).send({ error: "Erro interno do servidor" })
    }
  })
}
