import { FastifyInstance } from "fastify"
import axios from "axios"


export async function RouteNews(app: FastifyInstance) {
  app.get("/api/news/articles", async (request: any, reply) => {
    try {
      const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/")

      if (response.status === 200) {
        const data = response.data.results

        const processedData = data.map((dt: any) => ({
          id: dt.id,
          title: dt.title,
          author: dt.authors[0].name,
          url: dt.url,
          imageUrl: dt.image_url,
          summary: dt.summary,
          publishedAt: dt.published_at,
        }))
        
        reply.send(processedData)
      }
      else {
        reply.status(response.status).send("Erro ao acessar a API")
      }
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })


  app.get("/api/news/blogs", async (request: any, reply) => {
    try {
      const response = await axios.get("https://api.spaceflightnewsapi.net/v4/blogs/")

      if (response.status === 200) {
        const data = response.data.results

        const processedData = data.map((dt: any) => ({
          id: dt.id,
          title: dt.title,
          author: dt.authors[0].name,
          url: dt.url,
          imageUrl: dt.image_url,
          summary: dt.summary,
          publishedAt: dt.published_at,
        }))
        
        reply.send(processedData)
      }
      else {
        reply.status(response.status).send("Erro ao acessar a API")
      }
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })

  
  app.get("/api/news/reports", async (request: any, reply) => {
    try {
      const response = await axios.get("https://api.spaceflightnewsapi.net/v4/reports/")

      if (response.status === 200) {
        const data = response.data.results

        const processedData = data.map((dt: any) => ({
          id: dt.id,
          title: dt.title,
          author: dt.news_site,
          url: dt.url,
          imageUrl: dt.image_url,
          summary: dt.summary,
          publishedAt: dt.published_at,
        }))
        
        reply.send(processedData)
      }
      else {
        reply.status(response.status).send("Erro ao acessar a API")
      }
    } catch (error) {
      console.error(error)
      reply.status(500).send("Erro interno do servidor")
    }
  })
}
