// import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"

import { RouteApod } from "./routes/apod"
import { RouteNeoWs } from "./routes/neows"
// import { RouteDonki } from "./routes/donki"
// import { RouteSolarSystem } from "./routes/solar-system"
import "dotenv/config"

const fastify = require('fastify')({ logger: true })

fastify.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
})

// https://unyverso.vercel.app
// http://localhost:3000

fastify.register(RouteApod)
fastify.register(RouteNeoWs)
// fastify.register(RouteDonki)
// fastify.register(RouteSolarSystem)

const port = process.env.PORT || 4000;
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

fastify.listen({host: host, port: port }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
