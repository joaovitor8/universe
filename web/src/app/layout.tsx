import { Header } from "@/components/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// import Particles from "@/components/particles"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Universe",
  description: "...",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
