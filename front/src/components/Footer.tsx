
export const Footer = () => {
  return (
    <footer className="p-10 mt-10 flex items-center justify-around max-md:flex max-md:flex-col-reverse">
      <div className="text-sm">
        &copy; {new Date().getFullYear()} Universe. All rights reserved.
      </div>

      {/* <div className="flex space-x-6">
        <a href="#" className="hover:text-purple-900 transition">Política de Privacidade</a>
        <a href="#" className="hover:text-purple-900 transition">Termos de Uso</a>
      </div> */}

      <div className="space-x-4">
        <a href="https://www.linkedin.com/in/joaovitorezequiel/" target="_blank" className="hover:text-purple-900 transition">LinkedIn</a>
        <a href="https://github.com/joaovitor8" target="_blank" className="hover:text-purple-900 transition">GitHub</a>
      </div>
    </footer>
  )
}
