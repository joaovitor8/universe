

export const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm text-slate-400"> &copy; {new Date().getFullYear()} Universe. All rights reserved. </p>

          <div className="flex justify-center space-x-6">
            <a  href="https://www.linkedin.com/in/joaovitorezequiel/"  target="_blank"  rel="noopener noreferrer"  aria-label="LinkedIn"  className="text-slate-400 hover:text-purple-500 transition-colors" > Linkedin </a>
            <a  href="https://github.com/joaovitor8"  target="_blank"  rel="noopener noreferrer"  aria-label="GitHub"  className="text-slate-400 hover:text-purple-500 transition-colors" > Github </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
