// import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"

import { RouteApod } from "./routes/apod"
import { RouteNeoWs } from "./routes/neows"
// import { RouteDonki } from "./routes/donki"
import { RouteSolarSystem } from "./routes/solar-system"
import { RouteNews } from "./routes/news"
import { RouteNewsForm } from "./routes/newsForm"
import "dotenv/config"

const fastify = require('fastify')({ logger: true })
const sqlite = require("sqlite3")

fastify.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
})

// Cria a conexão com o banco SQLite
const db = new sqlite.Database("./src/db/newsUsers.db")

// Cria a tabela ao iniciar o servidor
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    news TEXT NOT NULL
  )
`, (err: any) => {
  if (err) {
    fastify.log.error('Erro ao criar tabela de usuários', err);
  } else {
    fastify.log.info('Tabela de usuarios criada ou ja existente.');
  }
});


fastify.register(RouteApod)
fastify.register(RouteNeoWs)
// fastify.register(RouteDonki)
fastify.register(RouteSolarSystem)

fastify.register(RouteNews)
RouteNewsForm(fastify, db)

const port = process.env.PORT || 4000;
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

fastify.listen({host: host, port: port }, function (err: any, address: string) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
