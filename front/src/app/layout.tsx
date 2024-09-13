import { Header } from "@/components/Header"
import Particles from "@/components/particles"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Universe",
  description: "...",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} scrollbar`}>
        <Particles className="absolute inset-0 -z-10" quantity={500} />
        <Header />
        {children}
      </body>
    </html>
  )
}
