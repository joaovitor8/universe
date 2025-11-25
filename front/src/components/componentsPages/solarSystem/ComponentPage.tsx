/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/Button"

export const ComponentPage = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="w-[300px] text-justify space-y-10 sm:w-[500px] md:w-[700px] lg:w-[1000px]">
        <div>
          <div className="md:flex md:gap-3">
            <div>
              <h1 className="text-5xl text-purple-700 mb-3">{}Nome</h1>
              <p>{}Apresentação</p>
            </div>
            <img src="/planets/earth.png" alt="Planet" className="my-4 md:w-1/2 md:flex" />
          </div>
          <p>{}Descrição</p>
        </div>

        <div className="space-y-4 md:flex md:gap-3">
          <div className="space-y-2">
            <h2 className="text-3xl text-purple-700">Geology</h2>
            <p>{}</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl text-purple-700">Atmosphere</h2>
            <p>{}</p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl text-purple-700">Natural Satellites</h2>
          <div>{}</div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl text-purple-700 mb-3">Space Exploration</h2>
          <div>{}</div>
        </div>

        <div className="text-center sm:flex sm:flex-col sm:items-center">
          <h3>Useful links to continue Exploring</h3>
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:w-[500px]">
            <Button className="w-3/4 sm:w-2/4">
              <a href="#" target="_blank">Learn More - Wikipedia</a>
            </Button>
            <Button className="w-3/4 sm:w-2/4">
              <a href="#" target="_blank">Learn More - Nasa</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
