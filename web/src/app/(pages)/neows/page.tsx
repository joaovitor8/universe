import { About } from "@/components/componentsPages/neoWs/About"
import { Feed } from "@/components/componentsPages/neoWs/Feed"
import { Lookup } from "@/components/componentsPages/neoWs/Lookup"

export default function NeoWs() {
  return (
    <main>
      {/* <About />
      <div className="my-10"></div> */}
      <Feed />
      <div className="my-10"></div>
      <Lookup />
    </main>
  )
}
