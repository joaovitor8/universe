/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


export default function Sun() {
  return (
    <main className="flex flex-col items-center text-justify my-20">

    <div className="w-[800px] flex flex-col gap-5 max-[900px]:w-[600px] max-[700px]:w-[300px]">
      <div className="flex gap-5 max-[700px]:flex-col">
        <div className="flex flex-col justify-around">
          <h2 className="text-4xl text-yellow-600 mt-10 mb-20">Sun</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus nisi esse deserunt aut ullam quos fugit, expedita hic autem officiis asperiores ipsum placeat labore, similique eius quae maxime laborum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ut id ipsum debitis quidem omnis perspiciatis perferendis natus rerum excepturi reiciendis, nesciunt, ea iure quae quod vel dolorum. Ducimus, tenetur!</p>
        </div>
        <img src="/planets/sun.png" alt="Planet" className="h-[400px] max-[900px]:h-[300px]"/>
      </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus nisi esse deserunt aut ullam quos fugit, expedita hic autem officiis asperiores ipsum placeat labore, similique eius quae maxime laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio itaque in molestias architecto, illo quis officiis, odit consequuntur ullam illum dolores molestiae debitis beatae autem consequatur dolorem tempore neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem ea, corporis neque repellendus quibusdam quia deleniti, tempora quaerat pariatur aperiam nemo veritatis possimus, hic mollitia soluta! Dolores, quaerat facere!</p>
    </div>

    <Separator className="my-10 w-[80%]"/>

    <div className="w-[800px] max-[900px]:w-[600px] max-[700px]:w-[300px]">
      <h3 className="text-yellow-600 text-3xl text-center mb-3">Space Exploration</h3>

      <p><span className="text-yellow-600">History of Discovery:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
      <p><span className="text-yellow-600">First Rovers:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
      <p><span className="text-yellow-600">Viking:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
      <p><span className="text-yellow-600">Pathfinder and Sojourner:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
      <p><span className="text-yellow-600">Spirit and Opportunity:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
      <p><span className="text-yellow-600">Curiosity:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
      <p><span className="text-yellow-600">Perseverance:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
    </div>

    <Separator className="my-10 w-[80%]"/>

    <div className="w-[800px] max-[900px]:w-[600px] max-[700px]:w-[300px]">
      <h3 className="text-3xl text-center mb-3">Useful links to continue <span className="text-yellow-600">Exploring</span></h3>
      <div className="flex justify-center max-[700px]:flex-col">
        <Button variant={"link"} className="hover:text-yellow-600" disabled>
          <a href="" target="_blank">Learn More - Wikipedia</a>
        </Button>

        <Button variant={"link"} className="hover:text-yellow-600" disabled>
          <a href="" target="_blank">Learn More - Nasa</a>
        </Button>
      </div>
    </div>

  </main>
  )
}