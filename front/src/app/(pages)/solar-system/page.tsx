
export default function SolarSystem() {
  return (
    <div className="h-screen flex flex-col items-center">
      <p className="text-center">Browse the Sun and Planets of our Solar System</p>

      <div className="mt-5">
        <iframe src="https://eyes.nasa.gov/apps/solar-system/#/home?featured=false&detailPanel=false&logo=false&search=false&shareButton=false&collapseSettingsOptions=true" allowFullScreen
          className="h-[500px] w-[900px] border border-purple-700 rounded-lg   max-[905px]:h-[500px] max-[905px]:w-[600px]   max-[605px]:hidden"
        ></iframe>

        <p className="text-center text-blue-700 min-[605px]:hidden">Please open the website in a larger screen to see the component.</p>
      </div>
    </div>
  )
}
