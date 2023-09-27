import { Header } from "@/components/Header"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Universo",
  description: "...",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="max-lg:hidden">
        <Header />
        {children}
      </body>
    </html>
  )
}
