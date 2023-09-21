const fastify = require("fastify")()
const cors = require("@fastify/cors")

fastify.register(cors, {
  origin: "*",
  methods: ["GET"],
})


fastify.get("/apod", async (request: any, reply: any) => {})

fastify.get("/apod/:id", async (request: any, reply: any) => {})


fastify.listen({ port: 3333 }).then(() => {
  console.log("Servidor rodando na porta: http://localhost:3333")
})
