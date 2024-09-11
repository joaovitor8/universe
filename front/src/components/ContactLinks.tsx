import Link from "next/link"

import { AtSign, ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react"

export const ContactLinks = () => {
  return (
    <div className="h-24 flex items-center justify-center space-x-5">
      <Link href={"https://github.com/joaovitor8"} target="_blank"> <Github size={30}/> <p>GitHub</p> </Link>
      <Link href={"https://www.linkedin.com/in/joaovitorezequiel/"} target="_blank"> <Linkedin size={30}/> <p>LinkdIn</p> </Link>
      <Link href={"/"} target="_blank"> <Twitter size={30}/> <p>Twitter</p> </Link>
      <Link href={"https://bsky.app/profile/buraco-negro.bsky.social"} target="_blank"> <AtSign size={30}/> <p>BlueSky</p> </Link>
      <Link href={"https://www.tiktok.com/@os_tres_corpos"} target="_blank"> <ExternalLink size={30}/> <p>TikTok</p> </Link>
      <div> <Mail size={30}/> <p>joaoezeki@gmail.com</p> </div>
    </div>
  )
}
