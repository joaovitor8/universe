
export const Footer = () => {
  return (
    <footer className="p-14 mt-10">
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center text-sm md:text-base">
        <div className="text-center md:text-left">
          {/* &copy; {new Date().getFullYear()} Universe. All rights reserved. */}
        </div>

        <div className="flex justify-center md:justify-end space-x-4 mb-2">
          <a href="https://www.linkedin.com/in/joaovitorezequiel/" target="_blank" className="hover:text-purple-700 transition-colors">LinkedIn</a>
          <a href="https://github.com/joaovitor8" target="_blank" className="hover:text-purple-700 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
