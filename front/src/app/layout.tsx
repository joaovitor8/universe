import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Stars from "@/components/Stars"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Universe",
  description: "Navegue pelas estrelas.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar max-[300px]:hidden`}>
        <Stars className="absolute inset-0 -z-10" quantity={500} />
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
