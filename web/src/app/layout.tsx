import { Header } from "@/components/Header"
import type { Metadata } from "next"
import "./globals.css"

import { NoMobile } from "@/components/NoMobile"
import { NoResponsiveness } from "@/components/NoResponsiveness"

export const metadata: Metadata = {
  title: "Universo",
  description: "...",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
