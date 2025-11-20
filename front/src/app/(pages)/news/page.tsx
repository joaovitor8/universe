import { NewsView } from "@/components/componentsPages/news/NewsView"

export default function News() {
  return (
    <main className="min-h-screen">
      <div className="text-center pt-12 pb-4 container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Cosmic Chronicles</h1>
        <p className="text-muted-foreground mt-2">Your source for the latest articles, blogs, and reports from across the universe.</p>
      </div>
      <NewsView/>
    </main>
  )
}
