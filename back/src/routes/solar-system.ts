import { FastifyInstance } from "fastify"
import { readFile } from "fs/promises"

export async function RouteSolarSystem(app: FastifyInstance) {
  app.get("/api/solar-system", async (request: any, reply) => {
    try {

      const response = await readFile("./src/midia/db_sistema-solar.json", "utf-8");
      const jsonData = JSON.parse(response);

      const data = jsonData.planetas.map((planet: any) => ({
        id: planet.id,
        name: planet.nome,
        type: planet.tipo,
        apresentation: planet.apresentacao,
        description: planet.descricao,
        image: {
          svg: planet.imagens.svg,
          png: planet.imagens.png,
        },

        geology: {
          estruture: planet.geologia.estrutura,
          superficie: planet.geologia.superficie,
        }
      }));

      reply.send(data)
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })
}
