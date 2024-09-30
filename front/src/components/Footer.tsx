import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"

export const Footer = () => {
  return (
    <footer className="h-40 flex flex-col justify-center items-center">
      <p><span className="text-violet-700">Made by:</span> João Vitor</p>
      <div>
        <Button variant={"link"} className="hover:text-violet-700">
          <a href="https://www.linkedin.com/in/joaovitorezequiel/" target="_blank"> <LinkedInLogoIcon/> </a>
        </Button>
        <Button variant={"link"} className="hover:text-violet-700">
          <a href="https://github.com/joaovitor8" target="_blank"> <GitHubLogoIcon/> </a>
        </Button>
      </div>
    </footer>
  )
}
