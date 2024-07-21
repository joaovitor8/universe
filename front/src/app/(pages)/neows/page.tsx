import { About } from "@/components/componentsPages/neoWs/About"
import { Feed } from "@/components/componentsPages/neoWs/Feed"
import { Lookup } from "@/components/componentsPages/neoWs/Lookup"

export default function NeoWs() {
  return (
    <main className="space-y-40 pt-24">
      {/* <About /> */}
      <Feed />
      <Lookup />
    </main>
  )
}
