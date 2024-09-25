/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


export default function Venus() {
  return (
    <main className="flex flex-col items-center text-justify my-20">

      <div className="w-[800px] flex flex-col gap-5 max-[900px]:w-[600px] max-[700px]:w-[300px]">
        <div className="flex gap-5 max-[700px]:flex-col">
          <div className="flex flex-col justify-around">
            <h2 className="text-4xl text-yellow-500 mt-10 mb-20">Venus: Earth&apos;s Sister Planet</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus nisi esse deserunt aut ullam quos fugit, expedita hic autem officiis asperiores ipsum placeat labore, similique eius quae maxime laborum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ut id ipsum debitis quidem omnis perspiciatis perferendis natus rerum excepturi reiciendis, nesciunt, ea iure quae quod vel dolorum. Ducimus, tenetur!</p>
          </div>
          <img src="/planets/venus.png" alt="Planet" className="h-[400px] max-[900px]:h-[300px]"/>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus nisi esse deserunt aut ullam quos fugit, expedita hic autem officiis asperiores ipsum placeat labore, similique eius quae maxime laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio itaque in molestias architecto, illo quis officiis, odit consequuntur ullam illum dolores molestiae debitis beatae autem consequatur dolorem tempore neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem ea, corporis neque repellendus quibusdam quia deleniti, tempora quaerat pariatur aperiam nemo veritatis possimus, hic mollitia soluta! Dolores, quaerat facere!</p>
      </div>

      <Separator className="my-10 w-[80%]"/>

      <div className="w-[800px] flex gap-5 max-[900px]:w-[600px] max-[700px]:w-[300px] max-[700px]:flex-col">
        <div>
          <h3 className="text-yellow-500 text-3xl text-center mb-3">Geology</h3>
          <p><span className="text-yellow-500">Surface:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span className="text-yellow-500">Volcanoes:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span className="text-yellow-500">Craters:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span className="text-yellow-500">Mountains:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
        </div>
        <div>
          <h3 className="text-yellow-500 text-3xl text-center mb-3">Atmosphere</h3>
          <p><span className="text-yellow-500">Composition:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span className="text-yellow-500">Atmospheric pressure:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span className="text-yellow-500">Climate:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
          <p><span className="text-yellow-500">Winds:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nostrum delectus itaque quia maxime at accusamus illum autem ad. Atque, ducimus. Veritatis ipsam itaque qui, porro quis alias eos!</p>
        </div>
      </div>

      <Separator className="my-10 w-[80%]"/>

      <div className="w-[800px] flex gap-5 flex-col max-[900px]:w-[600px] max-[700px]:w-[300px]">
        <h3 className="text-yellow-500 text-3xl text-center mb-3">Natural Satellites</h3>
        <div className="flex gap-5 max-[700px]:flex-col">
          <div className="flex flex-col justify-between items-start">
            <p><span className="text-yellow-500">Moon:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia natus eum eos ducimus atque officiis expedita quaerat error, perspiciatis illo nesciunt laboriosam explicabo dolorem optio velit harum laudantium nemo?</p>
            <Button variant={"link"} className="hover:text-yellow-500">
              <a href="" target="_blank">Learn More</a>
            </Button>
          </div>
          <img src="" alt="" className="rounded-xl" />
        </div>
        <div className="flex gap-5 max-[700px]:flex-col">
          <img src="" alt="" className="rounded-xl" />
          <div className="flex flex-col justify-between items-end">
            <p><span className="text-yellow-500">Moon:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus facere ullam a reiciendis aspernatur voluptate numquam, rerum saepe totam soluta officiis eius laudantium corrupti sed, earum pariatur sit, quam nesciunt?</p>
            <Button variant={"link"} className="hover:text-yellow-500">
              <a href="" target="_blank">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-10 w-[80%]"/>

      <div className="w-[800px] max-[900px]:w-[600px] max-[700px]:w-[300px]">
        <h3 className="text-yellow-500 text-3xl text-center mb-3">Space Exploration</h3>

        <p><span className="text-yellow-500">History of Discovery:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span className="text-yellow-500">First Rovers:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span className="text-yellow-500">Viking:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span className="text-yellow-500">Pathfinder and Sojourner:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span className="text-yellow-500">Spirit and Opportunity:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span className="text-yellow-500">Curiosity:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
        <p><span className="text-yellow-500">Perseverance:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore modi aut hic at officia, earum, consequatur illo impedit voluptatibus dolores soluta accusamus, voluptatem tenetur sunt. Itaque a perspiciatis laboriosam obcaecati!</p>
      </div>

      <Separator className="my-10 w-[80%]"/>

      <div className="w-[800px] max-[900px]:w-[600px] max-[700px]:w-[300px]">
        <h3 className="text-3xl text-center mb-3">Useful links to continue <span className="text-yellow-500">Exploring</span></h3>
        <div className="flex justify-center max-[700px]:flex-col">
          <Button variant={"link"} className="hover:text-yellow-500" disabled>
            <a href="" target="_blank">Learn More - Wikipedia</a>
          </Button>

          <Button variant={"link"} className="hover:text-yellow-500" disabled>
            <a href="" target="_blank">Learn More - Nasa</a>
          </Button>
        </div>
      </div>

    </main>
  )
}
