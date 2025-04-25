
export const Footer = () => {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} Universe. All rights reserved.
      </div>

      {/* <div className="flex space-x-6">
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
      </div> */}

      <div>
        <a href="https://www.linkedin.com/in/joaovitorezequiel/" target="_blank">LinkedIn</a>
        <a href="https://github.com/joaovitor8" target="_blank">GitHub</a>
      </div>
    </footer>
  )
}
