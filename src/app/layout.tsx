import { Inter_Tight } from "next/font/google"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Providers } from "@/providers"

const inter = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin-ext"]
})

export const metadata: Metadata = {
  title: "Vault",
  description: "Armazene suas senhas com segurança"
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt" className={`${inter.className}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
