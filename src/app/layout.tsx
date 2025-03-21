import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { ClerkProvider } from "@clerk/nextjs"
 import '../app/(protected)/globals.css'
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AutoParts Inventory Management",
  description: "Inventory management system for car spare parts",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
     
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
         
              <main >{children}</main>
            
        
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}



