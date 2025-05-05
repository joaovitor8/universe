/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/Button"

export default function Sun() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-[300px] text-justify space-y-10 sm:w-[500px] md:w-[700px] lg:w-[1000px]">
        <div>
          <div className="md:flex md:gap-3">
            <div>
              <h1 className="text-5xl text-purple-700 mb-3">Sun</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus nisi esse deserunt aut ullam quos fugit, expedita hic autem officiis asperiores ipsum placeat labore, similique eius quae maxime laborum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ut id ipsum debitis quidem omnis perspiciatis perferendis natus rerum excepturi reiciendis, nesciunt, ea iure quae quod vel dolorum. Ducimus, tenetur!</p>
            </div>
            <img src="/planets/sun.png" alt="Planet" className="my-4 md:w-1/2 md:flex" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus nisi esse deserunt aut ullam quos fugit, expedita hic autem officiis asperiores ipsum placeat labore, similique eius quae maxime laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio itaque in molestias architecto, illo quis officiis, odit consequuntur ullam illum dolores molestiae debitis beatae autem consequatur dolorem tempore neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem ea, corporis neque repellendus quibusdam quia deleniti, tempora quaerat pariatur aperiam nemo veritatis possimus, hic mollitia soluta! Dolores, quaerat facere!</p>
        </div>

        <div>
          <h2 className="text-3xl text-purple-700 mb-3">Space Exploration</h2>
          <div className="md:grid md:grid-cols-2 md:gap-3">
            <p><span>History of Discovery:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
            <p><span>First Rovers:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
            <p><span>Viking:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
            <p><span>Pathfinder and Sojourner:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
            <p><span>Spirit and Opportunity:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
            <p><span>Curiosity:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
            <p><span>Perseverance:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
          </div>
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
