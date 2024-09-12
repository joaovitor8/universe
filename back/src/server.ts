import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"

import { RouteApod } from "./routes/apod"
import { RouteNeoWs } from "./routes/neows"
import { RouteDonki } from "./routes/donki"
import { RouteSolarSystem } from "./routes/solar-system"
import "dotenv/config"

const app = fastify()

app.register(fastifyCors, {
  origin: "http://localhost:3000",
  methods: ["GET"],
})

app.register(RouteApod)
// app.register(RouteNeoWs)
// app.register(RouteDonki)
app.register(RouteSolarSystem)

const porta = process.env.PORT || 4000;

app.listen({ port: porta }).then(() => {
  console.log(`Servidor rodando`)
})
