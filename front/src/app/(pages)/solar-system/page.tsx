
export default function SolarSystem() {
  return (
    <div className="h-screen flex flex-col items-center">
      <p className="text-center">Browse the Sun and Planets of our Solar System</p>

      <div className="mt-5">
        <iframe src="https://eyes.nasa.gov/apps/solar-system/#/home?featured=false&detailPanel=false&logo=false&search=false&shareButton=false&collapseSettingsOptions=true" allowFullScreen
          className="hidden border border-purple-700 rounded-lg md:flex md:h-[500px] md:w-[600px] lg:w-[900px]"
        ></iframe>

        <p className="text-center text-blue-700 md:hidden">Please open the website in a larger screen to see the component.</p>
      </div>
    </div>
  )
}
