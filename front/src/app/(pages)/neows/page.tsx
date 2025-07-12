import { Feed } from "@/components/componentsPages/neoWs/Feed"
import { Lookup } from "@/components/componentsPages/neoWs/Lookup"

export default function NeoWs() {
  return (
    <main>
      <Feed />
      <div className="m-20"></div>
      <Lookup />
    </main>
  )
}
