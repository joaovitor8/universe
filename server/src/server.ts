import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"

import { RouteApod } from "./routes/apod"
import { RouteNeoWs } from "./routes/neows"
import { RouteDonki } from "./routes/donki"
// import { RouteEarth } from "./routes/earth"
import "dotenv/config"

const app = fastify()

app.register(fastifyCors, {
  origin: "http://localhost:3000",
  methods: ["GET"],
})

app.register(RouteApod)
app.register(RouteNeoWs)
app.register(RouteDonki)
// app.register(RouteEarth)

app.listen({ port: 3333 }).then(() => {
  console.log("Servidor rodando na porta: http://localhost:3333")
})
