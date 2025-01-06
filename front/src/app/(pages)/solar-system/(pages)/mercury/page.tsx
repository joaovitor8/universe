/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/Button"

export default function Mercury() {
  return (
    <main className="mainPagPlanets">

      <div className="w-[800px] flex flex-col gap-5   mobileTemp">
        <div className="flex gap-5 max-[700px]:flex-col">
          <div className="flex flex-col justify-around">
            <h1 className="h1PagPlanets">Mercury: The Closest Planet to the Sun</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus nisi esse deserunt aut ullam quos fugit, expedita hic autem officiis asperiores ipsum placeat labore, similique eius quae maxime laborum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ut id ipsum debitis quidem omnis perspiciatis perferendis natus rerum excepturi reiciendis, nesciunt, ea iure quae quod vel dolorum. Ducimus, tenetur!</p>
          </div>
          <img src="/planets/mercury.png" alt="Planet" className="h-[400px] max-[900px]:h-[300px]"/>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus nisi esse deserunt aut ullam quos fugit, expedita hic autem officiis asperiores ipsum placeat labore, similique eius quae maxime laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio itaque in molestias architecto, illo quis officiis, odit consequuntur ullam illum dolores molestiae debitis beatae autem consequatur dolorem tempore neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem ea, corporis neque repellendus quibusdam quia deleniti, tempora quaerat pariatur aperiam nemo veritatis possimus, hic mollitia soluta! Dolores, quaerat facere!</p>
      </div>
      
      
      <div className="w-[800px] flex gap-5   mobileTemp max-[700px]:flex-col">
        <div>
          <h2 className="h2PagPlanets">Geology</h2>
          <p><span>Surface:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span>Volcanoes:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span>Craters:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span>Mountains:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
        </div>
        <div>
          <h2 className="h2PagPlanets">Atmosphere</h2>
          <p><span>Composition:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span>Atmospheric pressure:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span>Climate:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span>Winds:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
        </div>
      </div>
      
      
      <div className="w-[800px] flex gap-5 flex-col   mobileTemp">
        <h2 className="h2PagPlanets">Natural Satellites</h2>
        <div className="flex gap-5 max-[700px]:flex-col">
          <div className="flex flex-col justify-between items-start">
            <p><span>Moon:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia natus eum eos ducimus atque officiis expedita quaerat error, perspiciatis illo nesciunt laboriosam explicabo dolorem optio velit harum laudantium nemo?</p>
            <Button>
              <a href="#" target="_blank">Learn More</a>
            </Button>
          </div>
          <img src="#" alt="" className="rounded-xl" />
        </div>
        <div className="flex gap-5 max-[700px]:flex-col">
          <img src="#" alt="" className="rounded-xl" />
          <div className="flex flex-col justify-between items-end">
            <p><span>Moon:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus facere ullam a reiciendis aspernatur voluptate numquam, rerum saepe totam soluta officiis eius laudantium corrupti sed, earum pariatur sit, quam nesciunt?</p>
            <Button>
              <a href="#" target="_blank">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
      
      
      <div className="w-[800px]   mobileTemp">
        <h2 className="h2PagPlanets">Space Exploration</h2>
        <p><span>History of Discovery:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span>First Rovers:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span>Viking:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span>Pathfinder and Sojourner:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span>Spirit and Opportunity:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span>Curiosity:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span>Perseverance:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
      </div>
      
      
      <div className="w-[800px]   mobileTemp">
        <h3 className="h3PagPlanets">Useful links to continue Exploring</h3>
        <div className="flex justify-center max-[700px]:flex-col">
          <Button>
            <a href="#" target="_blank">Learn More - Wikipedia</a>
          </Button>
          <Button>
            <a href="#" target="_blank">Learn More - Nasa</a>
          </Button>
        </div>
      </div>

    </main>
  )
}
