
export const Footer = () => {
  return (
    <footer className="p-10 mt-10 space-y-4 flex flex-row justify-between items-center   max-md:flex max-md:flex-col">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Universe. All rights reserved.
      </p>

      {/* <div className="flex space-x-6">
        <a href="#" className="hover:text-purple-900 transition">Política de Privacidade</a>
        <a href="#" className="hover:text-purple-900 transition">Termos de Uso</a>
      </div> */}

      <div className="flex space-x-4    max-md:grid max-md:grid-cols-2 max-md:gap-3">
        <a href="https://www.linkedin.com/in/joaovitorezequiel/" target="_blank" className="hover:text-purple-900 transition">LinkedIn</a>
        <a href="https://github.com/joaovitor8" target="_blank" className="hover:text-purple-900 transition">GitHub</a>
        <a href="https://x.com/AstronautJonnes" target="_blank" className="hover:text-purple-900 transition">Twitter (Universe)</a>
        <a href="https://x.com/joao_ezeki" target="_blank" className="hover:text-purple-900 transition">Twitter (Personal)</a>
      </div>
    </footer>
  )
}
