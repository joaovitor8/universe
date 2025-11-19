import { Orbit } from "lucide-react";

export default function SolarSystem() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-slate-700 rounded-lg">
      <Orbit className="h-16 w-16 text-purple-400 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Welcome to the Solar System</h2>
      <p className="text-muted-foreground max-w-md">
        Please select a planet, or our sun, from the navigation above to begin your journey through our cosmic neighborhood.
      </p>

      <div className="mt-5">
        <iframe src="https://eyes.nasa.gov/apps/solar-system/#/home?featured=false&detailPanel=false&logo=false&search=false&shareButton=false&collapseSettingsOptions=true" allowFullScreen
          className="hidden border border-purple-700 rounded-lg md:flex md:h-[500px] md:w-[600px] lg:w-[900px]"
        ></iframe>

        <p className="text-center text-blue-700 md:hidden">Please open the website in a larger screen to see the component.</p>
      </div>
    </div>
  )
}
