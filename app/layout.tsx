import type React from "react"
import "@/app/globals.css"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Aishans portfolio",
  description:
    "Portfolio of a full-stack developer specializing in React, Node.js, and modern web technologies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
