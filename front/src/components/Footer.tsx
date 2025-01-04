
export const Footer = () => {
  return (
    <footer className="border-t p-10   flex flex-col md:flex-row justify-between items-center space-y-4   mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Universe. All rights reserved.
      </p>

      {/* <div className="flex space-x-6">
        <a href="#" className="hover:text-purple-900 transition">Política de Privacidade</a>
        <a href="#" className="hover:text-purple-900 transition">Termos de Uso</a>
      </div> */}

      <div className="flex space-x-4">
        <a href="#" className="hover:text-purple-900 transition">LinkedIn</a>
        <a href="#" className="hover:text-purple-900 transition">GitHub</a>
        <a href="#" className="hover:text-purple-900 transition">Twitter</a>
      </div>
    </footer>
  )
}
