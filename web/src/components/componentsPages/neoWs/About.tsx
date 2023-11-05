/* eslint-disable @next/next/no-img-element */

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-1">
      <div className="w-[1000px] text-center space-y-10">
        <h2 className="text-3xl mt-10">Near Earth Object Web Service</h2>
        <p className="text-lg">Search and look for asteroids based on date of closest approach to Earth</p>
        <div className="flex items-center">
          <img src="./img/asteroid_b.jpg" alt="" className="h-[200px]"/>
          <div className="flex flex-col items-start">
            <p>ASTEROIDS are giant hunks of rock and metal that orbit the Sun.</p>
            <p>Some are more rocky in composition, while others are more metallic. Like comets, they are remnants left over from the formation of our solar system more than 4 billion years ago.</p>
          </div>
        </div>
        <div className="flex items-center">
          <p>Most of this ancient space rubble can be found orbiting the Sun between Mars and Jupiter within the main asteroid belt. Many asteroids have orbits that stray far outside the asteroid belt as well, and quite a few have paths that cross the orbit of Earth. Groups of asteroids have collected in different parts of the solar system over time as a result of gravitational tugs from Jupiter and the other planets.</p>
          <img src="./img/asteroids.jpg" alt="" className="h-[200px]"/>
        </div>
        <div className="flex items-center">
          <img src="./img/asteroid_a.jpg" alt="" className="h-[200px]"/>
          <div className="flex flex-col items-start">
            <p>Asteroids range in size from Vesta – the largest at 329 miles (530 kilometers) in diameter – to bodies less than 30 feet (10 meters) across.</p>
            <p>The total mass of all the asteroids combined is less than that of Earths Moon.</p>
            <p>Most asteroids are irregularly shaped – many resemble potatoes, bones or bowling pins. Lots of asteroids have been found to have small companion moons. There are also binary (double) asteroids, in which two rocky bodies of roughly equal size orbit each other, as well as triple asteroid systems. Asteroids generally are named for characters from mythology, as well as real people.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
