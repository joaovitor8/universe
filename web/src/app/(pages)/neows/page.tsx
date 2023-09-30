import { About } from "@/components/componentsPages/componentsNeoWs/About"
import { Feed } from "@/components/componentsPages/componentsNeoWs/Feed"
import { Lookup } from "@/components/componentsPages/componentsNeoWs/Lookup"

export default function NeoWs() {
  return (
    <main>
      <About />
      <div className="my-10"></div>
      <Feed />
      <div className="my-10"></div>
      <Lookup />
    </main>
  )
}
