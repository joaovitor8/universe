import { AsteroidsFeed } from "@/components/componentsPages/componentsNeoWs/AsteroidsFeed"
import { AsteroidsLookup } from "@/components/componentsPages/componentsNeoWs/AsteroidsLookup"

export default function NeoWs() {
  return (
    <main>
      <AsteroidsFeed />
      <div className="my-10"></div>
      {/* <AsteroidsLookup /> */}
    </main>
  )
}


// Near Earth Object Web Service